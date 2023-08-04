import React, { useEffect, useState, useCallback } from 'react';
import {StyleSheet, View } from 'react-native';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GetConversations, SendMessage} from '../hooks';


export const Conversation = ({navigation, route}: any ) => {

    const [messages, setMessages] = useState<any>([])
    const {convoId} = route.params
    const {userId} = route.params
    const {participantId} = route.params
    const {name} = route.params
    const convos: any[] = []
    useEffect(() => {
        navigation.getParent('tabs').setOptions({tabBarStyle: {display: 'none'}});

        GetConversations(convoId).then(data => {
          
          data.forEach((val) =>{
            convos.push({
              _id: val.docId,
              text: val.text,
              createdAt: val.createdAt,
              user: {
                _id: val.user
              }
            })
          })
          setMessages(convos)
        })
        
        return ()=>{
            //when leave this screen, and the hooks disposed, we set tabBarStyle to {}, means we will use the default style defined above, that is display:'flex'
            navigation.getParent('tabs').setOptions({tabBarStyle: {}});
            };
      }, [navigation]);

    const onSend = useCallback((messages = []) => {

        const msg: any = messages[0]

        const userMsg = {
          ConversationId:convoId,
          CreatedAt: new Date(),
          Id: participantId,
          Participant: name,
          Text: msg.text,
          UserId: userId
        }

        //console.log(userMsg.Id)

        setMessages((previousMessages: any) =>
          GiftedChat.append(previousMessages, messages),
        )

       SendMessage(userMsg, convoId)
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
        _id: userId,
      }}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
    ) 
}
const styles = StyleSheet.create({});
