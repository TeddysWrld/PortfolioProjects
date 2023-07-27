import React, { useEffect, useState, useCallback } from 'react';
import {StyleSheet, View } from 'react-native';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const Conversation = ({navigation}: any ) => {

    const [messages, setMessages] = useState<any>([])

    useEffect(() => {
        navigation.getParent('tabs').setOptions({tabBarStyle: {display: 'none'}});
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
            },
          },
          {
            _id: 2,
            text: 'Hello world',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'React Native',
            },
          },
        ]);
        return ()=>{
            //when leave this screen, and the hooks disposed, we set tabBarStyle to {}, means we will use the default style defined above, that is display:'flex'
            navigation.getParent('tabs').setOptions({tabBarStyle: {}});
            };
      }, [navigation]);

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages: any) =>
          GiftedChat.append(previousMessages, messages),
        )
      }, [])

      const scrollToBottomComponent = () => {
        return(
          <FontAwesome name='angle-double-down' size={22} color='#333' />
        );
      }

      const renderSend = (props: any) => {
        return (
          <Send {...props}>
            <View>
              <MaterialCommunityIcons
                name="send-circle"
                style={{marginBottom: 5, marginRight: 5}}
                size={32}
                color="#2e64e5"
              />
            </View>
          </Send>
        );
      };

    return(
        <GiftedChat
      messages={messages}
      onSend={(messages: any) => onSend(messages)}
      user={{
        _id: 1,
      }}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
    ) 
}
const styles = StyleSheet.create({});
