import {createUserWithEmailAndPassword, signOut,signInWithEmailAndPassword} from "firebase/auth";
import { auth, db } from "../firebase.config";
import { addDoc, collection, getDocs, where } from 'firebase/firestore/lite';

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
      console.log(doc.data());
      return doc.data()
    })
}

export async function GetConversations(){
  //Gotta use the query
  const convoCol = collection(db, 'Conversations')
  const test = where('ConversationId', '==', "TEST12")
  console.log(test);
  
  const docSnap = await getDocs(convoCol)
  const data = docSnap.forEach((doc)=>{
    console.log(doc.data());
    return doc.data()
  })
  return data
}

export async function GetMessages(){
  //Gotta use a query
  const userCol = collection(db, 'Messages')
  const docSnap = await getDocs(userCol)
  docSnap.forEach((doc)=>{
    console.log(doc.data());
    
  })
}

