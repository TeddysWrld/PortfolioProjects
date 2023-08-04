import {
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Card, Container, HeaderText, MessageText, PostTime, TextSection, UserImg, UserImgWrapper, UserInfo, UserInfoText, UserName } from "../styles/ChatsStyles";
import { GetChatsById } from "../hooks";

const convos = [
 {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require("../assets/profile-pic.png"),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require("../assets/profile-pic.png"),
    messageTime: '30 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require("../assets/profile-pic.png"),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require("../assets/profile-pic.png"),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Christy Alex',
    userImg: require("../assets/profile-pic.png"),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '7',
    userName: 'Vickie Guerrero',
    userImg: require("../assets/profile-pic.png"),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '8',
    userName: 'Brock Lesnar',
    userImg: require("../assets/profile-pic.png"),
    messageTime: '17/07/23',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '9',
    userName: 'Booker T',
    userImg: require("../assets/profile-pic.png"),
    messageTime: '17/07/23',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '10',
    userName: 'Triple H',
    userImg: require("../assets/profile-pic.png"),
    messageTime: '17/07/23',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

export const Chats = ({navigation}: any) => {

  const [messages, setMessages] = useState<any>([]);
  
  useEffect(() => {
    //GetConversations('TEST12').then(data => setMessages(data))
    GetChatsById("ID1234567").then(data => {
     // console.log(data)
      setMessages(data)
    })
      
  }, []);

 

  return (
    <SafeAreaView style={{flex: 1}}>
     
        <Container >
            <FlatList 
                 ListHeaderComponent={
                  <HeaderText>Messages</HeaderText>
                      }
              data={messages}
              keyExtractor={(item) => item.docId}
              renderItem={({item}) =>(
                <Card onPress={() => {
                  navigation.navigate('Conversation',{ 
                    name: item.Participant, 
                    convoId: item.ConversationId, 
                    userId: item.UserId,
                    participantId: item.Id})}}> 
                  <UserInfo>
                  <UserImgWrapper>
                  <UserImg source={require('../assets/profile-pic.png')}  />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.Participant}</UserName>
                    <PostTime>{item.CreatedAt.toDate().toDateString()}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.Text}</MessageText>
                </TextSection>
                  </UserInfo>
                </Card>
              )}
              ></FlatList>
      </Container>


    </SafeAreaView>
  );
};

