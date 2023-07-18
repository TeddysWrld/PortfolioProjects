import { View, Text, SafeAreaView,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {hexColours} from '../constants'

export const Welcome = () => {
    return (
      <SafeAreaView className={`flex-1 space-y-7`} style={{ backgroundColor:`${hexColours.Purple}`}}>
        <View className='items-center mt-32'>
      <Image source={require("../assets/Hand.png")} className='w-[150px] h-[150px]'/>
    </View>
    <View className='py-2 items-center'>
      <Text className='text-white text-[40px] font-bold'>HeyThere</Text>
    </View>

    <View className='items-center justify-end'>
      <TouchableOpacity className={`border border-black h-[60px] w-[50%] rounded-[10px] items-center justify-center`} style={{ backgroundColor:`${hexColours.Blue}`}}>
        <Text className='text-white text-[20px] font-bold'>Continue</Text>
      </TouchableOpacity>
    </View>

      </SafeAreaView>
    );
  }