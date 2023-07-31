import {createUserWithEmailAndPassword, signOut,signInWithEmailAndPassword} from "firebase/auth";
import { auth, db } from "../firebase.config";
import { addDoc, collection, getDocs, query, where, getDoc } from 'firebase/firestore/lite';

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
    const userCol = collection(db, 'Users')
    const docSnap = await getDocs(userCol)
    return docSnap.forEach((doc)=>{
      // console.log(doc.data());
      return doc.data()
    })
}

export async function GetConversations(){
  //If user is not logged in return nothing
  if(auth.currentUser == undefined){
    return null
  }

  //This is the query to get conversations of the logged in user
  const conversations:any[] = []
  await getDocs(query(collection(db, 'Conversations'), where("UserId", "==",auth.currentUser?.uid))).then((data)=> {
    conversations.push(data.docs[0].data())
  })

  return conversations
}

export async function StartConversation(){
   //If user is not logged in return nothing
   if(auth.currentUser == undefined){
    return null
  }

  //This is how you start a new conversation
  const newConversation = await addDoc(collection(db, "Conversations"), {
    ConversationId: "",
    UserId: auth.currentUser?.uid,
  });
  console.log(newConversation);

}

export async function GetMessages(convoId:string){
  //if no conversation id given return nothing
  if(convoId ==''){
    return null
  }

  //This is the query to get messsages linked to a conversation that started
  const messages:any[]= []
  await getDocs(query(collection(db, 'Messages'), where("ConversationId", "==",convoId))).then((data)=> {
    messages.push(data.docs[0].data())    
  })
   
  return messages
}

