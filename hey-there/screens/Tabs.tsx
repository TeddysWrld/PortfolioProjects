import * as React from 'react'
import { Profile } from './Profile'
import { Contacts } from './Contacts'
import { Chats } from './Chats'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {hexColours} from '../constants'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export function HomeScreen()
{
    return(
        <Tab.Navigator initialRouteName='Home' 
        screenOptions={{
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarStyle:{
                backgroundColor: '#D9D9D9'
            }}}>
            <Tab.Screen 
            name='Chats' 
            component={Chats}
            options={{ tabBarIcon: ({focused}) =>(
            <Ionicons name={ focused? "chatbubbles" : "chatbubbles-outline"} size={30} color={`${hexColours.Purple}`}/>) }}/>

            <Tab.Screen 
            name='Contacts' 
            component={Contacts}
            options={{ tabBarIcon: (
            {focused}) =>(
            <Ionicons name={focused? "add-circle" : "add-circle-outline"} size={35} color={`${hexColours.Purple}`} />) }}/>

            <Tab.Screen 
            name='Profile' 
            component={Profile}
            options={{ tabBarIcon: ({focused}) =>(
            <Ionicons name={focused? "person" : "person-outline"} size={30} color={`${hexColours.Purple}`}/>) }}/>
        </Tab.Navigator>
    );
}