import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { auth } from './firebase.config';
import { HomeScreen } from './screens/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SignIn, SignUp } from './screens';
import {onAuthStateChanged} from "firebase/auth";

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  function authStateChange(user:any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(()=>{
    const subscriber = onAuthStateChanged(auth, authStateChange)
    return subscriber; // unsubscribe on unmount
  }, [])

  //Add loading screen
  if (initializing) return null;

  if (!user) return AuthStack()

  return AppStack()
}


const AppStack =()=>{
  const AppStack = createNativeStackNavigator();

  return ( 
  <NavigationContainer>
    <AppStack.Navigator initialRouteName='Home'>
      <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
    </AppStack.Navigator>
  </NavigationContainer>)
}

const AuthStack =()=>{
  const authStack = createNativeStackNavigator();

  return ( 
  <NavigationContainer>
    <authStack.Navigator initialRouteName='SignIn'>
      <authStack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
      <authStack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
    </authStack.Navigator>
  </NavigationContainer>)
}