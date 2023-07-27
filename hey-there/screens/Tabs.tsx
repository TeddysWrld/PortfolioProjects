import * as React from 'react'
import { Profile } from './Profile'
import { Contacts } from './Contacts'
import { Chats } from './Chats'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {hexColours} from '../constants'
import { Conversation } from './Conversation';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MessageStack = ({navigation}: any) => (
    <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Chats}
        options={{headerShown: false}}
        />
        <Stack.Screen
         name="Conversation" 
         component={Conversation} 
         options={({route}: any) => ({
            title: route.params?.name,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          })}/>
    </Stack.Navigator>
);

 



export function HomeScreen()
{
    return(
        <Tab.Navigator 
        id="tabs"
        initialRouteName='Home' 
        screenOptions={{
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarStyle:{
                backgroundColor: '#D9D9D9'
            }}}>
            <Tab.Screen 
            name='Chats' 
            component={MessageStack}
            options={({route}) => ({
                tabBarIcon: ({focused}) => (
                    <Ionicons name={ focused? "chatbubbles" : "chatbubbles-outline"} size={30} color={`${hexColours.Purple}`}/>
                ),
              })}
            />

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