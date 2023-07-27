import { SafeAreaView, Text, View } from 'react-native';
import { Conversation, SignIn, SignUp } from './screens';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './screens/Tabs';

export default function App() {
  const AppStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName='Conversation'>
        <AppStack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <AppStack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
        <AppStack.Screen name="Conversation" component={Conversation} />
      </AppStack.Navigator>
    </NavigationContainer>

    
  );
}
