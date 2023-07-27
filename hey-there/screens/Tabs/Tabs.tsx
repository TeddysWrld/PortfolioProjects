import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, NewConversation, Profile } from '.';


export const Tabs = () => {
const bottomTab = createBottomTabNavigator();
  return (
    <bottomTab.Navigator>
    <bottomTab.Screen name="Home" component={HomeScreen}  options={{headerShown:false}} />
    <bottomTab.Screen name="NewConversation" component={NewConversation}  options={{headerShown:false}} />
    <bottomTab.Screen name="Profile" component={Profile}  options={{headerShown:false}} />
  </bottomTab.Navigator>
   
  )
}
