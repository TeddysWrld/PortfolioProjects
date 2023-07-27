import React, { useEffect, useLayoutEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Layout } from 'react-native-reanimated';


export const Conversation = ({navigation}: any ) => {

    const [messages, setMessages] = useState<string[]>([]);

    useLayoutEffect(() =>{

        navigation.setOptions({
            title: 'Amanda',
            headerTitleAlign: "center",    
        })
    })

    // useEffect(() => {
        
    //     setMessages([
    //         id: '1',
    //     ])
    // }, [])

    return(
        <SafeAreaView>
           <View></View>
        </SafeAreaView>
    ) 
}
const styles = StyleSheet.create({});
