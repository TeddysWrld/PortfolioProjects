import { SafeAreaView, Text, View } from 'react-native';
import { SignIn, SignUp } from './screens';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const AppStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName='SignIn'>
        <AppStack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <AppStack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
