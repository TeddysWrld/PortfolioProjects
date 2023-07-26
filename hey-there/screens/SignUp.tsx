import { View, Text, SafeAreaView,Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { hexColours } from '../constants'
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth, db } from '../firebase.config';
import { addDoc, collection } from 'firebase/firestore/lite';

export const SignUp = ({navigation}:any) => {

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSignUp = ()=>{
    createUserWithEmailAndPassword(auth, "ofentsekea.mokele@gmail.com","FentseTM@21").then((credentials)=> {
      console.log("new credentials", credentials);
      
    })
  }

  const newUserFirebase = async ()=>{
    const newUser = await addDoc(collection(db,'Users'), {Name: "testName", Surname: "testSurname", Email:"test@gmail.com", UserId:"TestIDS"})
    console.log(newUser);
    
  }

  useEffect(()=>{
    // handleSignUp()
    // newUserFirebase()
  },[])

  return (
    <SafeAreaView className={`bg-indigo-950 flex-1 space-y-7`}>
    <View className='items-center mt-10'>
      <Image source={require("../assets/Hand.png")} className='w-[150px] h-[150px]'/>
    </View>
    <View className='py-2 items-center'>
      <Text className='text-white text-[40px] font-bold'>SIGN Up</Text>
    </View>
    <View className='items-center space-y-6'>
      <TextInput placeholder='Name' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
      <TextInput placeholder='Surname' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
      <TextInput placeholder='Email' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
      <TextInput placeholder='Password' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
      <TextInput placeholder='Confirm Password' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
    </View>
    <View className='items-center justify-end'>
      <TouchableOpacity className={`border border-black h-[60px] w-[50%] rounded-[10px] bg-blue-600 items-center justify-center`}>
        <Text className='text-white text-[20px] font-bold'>Sign Up</Text>
      </TouchableOpacity>
    </View>
    <View className=' space-y-3 items-center '>
    <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}>
        <Text  className='text-white text-[16px]'>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>

  </SafeAreaView>
  )
}
