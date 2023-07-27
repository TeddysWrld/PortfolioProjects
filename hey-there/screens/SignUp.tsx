import { View, Text, SafeAreaView,Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { signUp } from '../hooks'

export const SignUp = () => {
  
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSignUp =()=>{
    if(name == "" || surname ==""|| email == ""){
      console.log("Fields are missing")
    }
    if(password != confirmPassword){
      console.log("Passwords dont match")
    }

   signUp(email,password,name,surname)

  }

  return (
    <SafeAreaView className={`bg-indigo-950 flex-1 space-y-7`}>
    <View className='items-center mt-10'>
      <Image source={require("../assets/Hand.png")} className='w-[150px] h-[150px]'/>
    </View>
    <View className='py-2 items-center'>
      <Text className='text-white text-[40px] font-bold'>SIGN Up</Text>
    </View>
    <View className='items-center space-y-6'>
      <TextInput onChangeText={(nameVal)=>{setName(nameVal)}} placeholder='Name' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
      <TextInput onChangeText={(surnameVal)=>{setSurname(surnameVal)}} placeholder='Surname' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
      <TextInput onChangeText={(emailVal)=>{setEmail(emailVal)}} placeholder='Email' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
      <TextInput onChangeText={(passwordVal)=>{setPassword(passwordVal)}} placeholder='Password' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
      <TextInput onChangeText={(confirmVal)=>{setConfirmPassword(confirmVal)}}placeholder='Confirm Password' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
    </View>
    <View className='items-center justify-end'>
      <TouchableOpacity onPress={handleSignUp} className={`border border-black h-[60px] w-[50%] rounded-[10px] bg-blue-600 items-center justify-center`}>
        <Text className='text-white text-[20px] font-bold'>Sign Up</Text>
      </TouchableOpacity>
    </View>
    <View className=' space-y-3 items-center'>

    <TouchableOpacity>
        <Text className='text-white text-[16px]'>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>

  </SafeAreaView>
  )
}
