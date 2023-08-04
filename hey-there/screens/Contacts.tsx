import {
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  HeaderText,
  SearchBarInput,
  TextSection,
  UserImg,
  UserImgWrapper,
  UserInfo,
  UserInfoText,
  UserName,
} from "../styles/ChatsStyles";
import { GetConversationId, GetMyContacts } from "../hooks";


export const Contacts = ({navigation}: any) => {

  const [contacts, setContacts] = useState<any>([]);

  useEffect(() => {
    GetMyContacts("ID1234567").then(data => setContacts(data))
  }, []);


  const getConversationId = async (UserId: string, ParticipantId: string) =>
  {
    var convoId = await GetConversationId(UserId, ParticipantId)
    return convoId
  }

  return (
    <SafeAreaView className={`flex-1`}>
      <Container>
        <FlatList 
          ListHeaderComponent={
      <>
      <HeaderText>Start Conversation</HeaderText>
      <SearchBarInput></SearchBarInput>
      </>
          }
          data={contacts}
          keyExtractor={(item) => item.UserId}
          renderItem={({ item }) => (
            <Card onPress={async () => {
              const id = await getConversationId("ID1234567",item.UserId)
              console.log(id)
              navigation.navigate('Conversation',{ 
                name: `${item.Name} ${item.Surname}`, 
                convoId: id,
                userId: "ID1234567",
                participantId: item.UserId})}}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={require('../assets/profile-pic.png')} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                  <UserName>{item.Name} {item.Surname}</UserName>
                  </UserInfoText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        ></FlatList>
      </Container>
    </SafeAreaView>
  );
};
