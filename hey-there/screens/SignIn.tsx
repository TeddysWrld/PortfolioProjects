import { View, Text, SafeAreaView,Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Login } from '../hooks'

export const SignIn = ({navigation}:any) => {

  const [email, setEmail] = useState('ofentsekea.mokele@gmail.com')
  const [password, setPassword] = useState('FentseTM@21')

  const handleLogin = ()=>{  
    if(email == ''|| password==''){
      console.log("Please enter a email and password");
      
    }
    else{
      Login(email,password)
    }    
  }

  return (
    <SafeAreaView className={`bg-indigo-950 flex-1 space-y-7`}>
      <View className='items-center mt-10'>
        <Image source={require("../assets/Hand.png")} className='w-[150px] h-[150px]'/>
      </View>
      <View className='py-2 items-center'>
        <Text className='text-white text-[40px] font-bold'>SIGN IN</Text>
      </View>
      <View className='items-center space-y-6'>
        <TextInput placeholder='Email' onChangeText={(emailVal)=> setEmail(emailVal)} className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
        <TextInput placeholder='Password' onChangeText={(passwordVal)=> setPassword(passwordVal)} className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
      </View>
      <View className='items-center justify-end'>
        <TouchableOpacity onPress={handleLogin} className={`border border-black h-[60px] w-[50%] rounded-[10px] bg-blue-600 items-center justify-center`}>
          <Text className='text-white text-[20px] font-bold'>Login</Text>
        </TouchableOpacity>
      </View>
      <View className=' space-y-3 items-center '>
      <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
          <Text  className='text-white text-[16px]'>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text className='text-white text-[16px]'>Forgot Password</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
