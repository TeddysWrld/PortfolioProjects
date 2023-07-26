import { SignIn, SignUp } from './screens';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tabs } from './screens/Tabs';;
import { useEffect } from 'react';
import { db } from './firebase.config';
import { collection, getDoc, getDocs } from 'firebase/firestore/lite';

import Tabs from './screens/Tabs';

export default function App() {

  const AppStack = createNativeStackNavigator();

  async function getUsers(){

    const userCol = collection(db, 'Users')
    const docSnap = await getDocs(userCol)
    docSnap.forEach((doc)=>{
      console.log(doc.data());
      
    })
  }

  useEffect(()=>{
    getUsers()

  }, [])

  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName='SignIn'>
        <AppStack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <AppStack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
        <AppStack.Screen name="Tabs" component={Tabs} options={{headerShown:false}} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
