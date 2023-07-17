import { View, Text, SafeAreaView,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {hexColours} from '../constants'

export const SignIn = ({navigation}:any) => {
  return (
    <SafeAreaView className={`bg-[${hexColours.Purple}] flex-1 space-y-7`}>
      <View className='items-center mt-10'>
        <Image source={require("../assets/Hand.png")} className='w-[150px] h-[150px]'/>
      </View>
      <View className='py-2 items-center'>
        <Text className='text-white text-[40px] font-bold'>SIGN IN</Text>
      </View>
      <View className='items-center space-y-6'>
        <TextInput placeholder='Email' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
        <TextInput placeholder='Password' className='w-[80%] h-[40px] border border-black bg-white rounded-[10px] pl-2 text-[20px]'/>
      </View>
      <View className='items-center justify-end'>
        <TouchableOpacity className={`border border-black h-[60px] w-[50%] rounded-[10px] bg-[${hexColours.Blue}] items-center justify-center`}>
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
