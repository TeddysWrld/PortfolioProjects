import {createUserWithEmailAndPassword, signOut,signInWithEmailAndPassword} from "firebase/auth";
import { auth, db } from "../firebase.config";
import { addDoc, collection, doc, documentId, getDocs, limit, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore/lite';

export const signUp = (email:string, password:string, name:string, surname:string)=>{
    createUserWithEmailAndPassword(auth, email,password).then((credentials)=> {
      console.log("New credentials", credentials);
      NewUserFirebase(name,surname,email,credentials.user.uid).then(()=>{(console.log("User signed up")
      )})

    }).catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    })
  }

export const NewUserFirebase = async (name:string, surname:string, email:string, userId:string)=>{
 
  const newUser = await addDoc(collection(db, "Users"), {
    Name: name,
    Surname: surname,
    Email: email,
    UserId: userId,
  });
  console.log(newUser);
}

export const Login = (email:string, password:string)=>{
  signInWithEmailAndPassword(auth, email, password)
        .then((credentials) => {
          console.log("User log in credentials:", credentials);
        })
        .catch((reason) => {
          console.log("Error occured: ", reason);
        });
}

export const SignOut =()=>{
    signOut(auth).then(()=>{console.log("User is logged out");
 })
}

export async function GetUsers(){
 const list: any[] = []
    const userCol = collection(db, 'Users')
    const docSnap = await getDocs(userCol)
    docSnap.forEach((doc)=>{
      list.push(doc.data())
      return doc.data()
    })

    return list
}

export async function GetMyContacts(UserId: string){
  const userCol =  query(collection(db, 'Users'),
                         where('UserId', '!=', UserId))
  const docSnap = await getDocs(userCol)
  const data = docSnap.docs.map(doc => ({docId: doc.id, ...doc.data()}))
  return data
}

export async function GetConversationId(UserId: string, ParticipantId: string){
  const userCol =  query(collection(db, 'Messages'),
                         where('UserId', '==', UserId),
                         where('Id', '==', ParticipantId),
                         limit(1))
  const docSnap = await getDocs(userCol)
  let data: string = ''
  docSnap.docs.map((doc) =>  data = doc.data().ConversationId)

  if(data === '')
  {
    let docRef = doc(collection(db, "Conversations"))
    await setDoc(docRef, {
      ConversationId: docRef.id,
      UserId: UserId,
      LastMessage: ""
    });
    data = docRef.id
  }
  return data
}

export async function GetUserById(UserId: string){

  const user = query(collection(db, 'Users'), 
                     where('UserId', '==', UserId))
 const querySnapshot  = await getDocs(user)
 const data = querySnapshot.docs.map(doc => ({docId: doc.id, ...doc.data()}))
 return data
}

export async function UpdateProfile(docId: string, field: string, value: string){

  const user = doc(db, "Users", docId)
  await updateDoc(user,{
    [`${field}`]: value
  })

  return console.log("updated")
}

export async function GetConversations(conversationId: string){
  const convo = query(collection(db, 'Messages'),
                      where('ConversationId', '==', conversationId),
                      orderBy('CreatedAt', 'desc'))
  
  const querySnapshot  = await getDocs(convo)
  const data = querySnapshot.docs.map((doc: any) => ({
    docId: doc.id,
    createdAt: doc.data().CreatedAt.toDate(),
    text: doc.data().Text,
    user: doc.data().UserId,
    to: doc.data().Id
  }))
  
  return data
  
 
}

export async function SendMessage(messsage: any, convoId: string)
{
  const docRef = await addDoc(collection(db, 'Messages'),{
    ...messsage
  })

  const convo = doc(db, "Conversations", convoId)
  await updateDoc(convo, {
    LastMessage: docRef.id
  })

}

export async function GetMessages(conversationId: string){
  const msgResponse = query(collection(db, 'Messages'), 
                      where('ConversationId', '==', conversationId))
  const querySnapshot  = await getDocs(msgResponse)
  const data = querySnapshot.docs.map(doc => doc.data())
  
  return data
}

export async function GetChatsById(conversationId: string){

  const messages = query(collection(db, 'Conversations'), 
                        where('UserId', '==', conversationId)
                        )
  const querySnapshot  = await getDocs(messages)
  const lastMessgaes = querySnapshot.docs.map(doc => doc.data().LastMessage)

  const q = query(collection(db, "Messages"), where(documentId(), 'in', lastMessgaes));
  const msgQuery = await getDocs(q)
  const data = msgQuery.docs.map((doc) => ({docId: doc.id, ...doc.data()}))
  return data
}
