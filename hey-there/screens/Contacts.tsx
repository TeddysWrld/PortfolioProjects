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
import { GetUsers } from "../hooks";

const users = [
  {
    id: "1",
    userImg: require("../assets/profile-pic.png"),
    userName: "Jenny Doe",
  },
  {
    id: "2",
    userImg: require("../assets/profile-pic.png"),
    userName: "John Doe",
  },
  {
    id: "3",
    userImg: require("../assets/profile-pic.png"),
    userName: "Ken William",
  },
  {
    id: "4",
    userImg: require("../assets/profile-pic.png"),
    userName: "Selina Paul",
  },
  {
    id: "5",
    userImg: require("../assets/profile-pic.png"),
    userName: "Christy Alex",
  },
  {
    id: "6",
    userImg: require("../assets/profile-pic.png"),
    userName: "Vickie Guerrero",
  },
  {
    id: "7",
    userImg: require("../assets/profile-pic.png"),
    userName: "Brock Lesnar",
  },
  {
    id: "8",
    userImg: require("../assets/profile-pic.png"),
    userName: "Booker T",
  },
  {
    id: "9",
    userImg: require("../assets/profile-pic.png"),
    userName: "Triple H",
  },
];



export const Contacts = ({navigation}: any) => {

  const [contacts, setContacts] = useState<any>([]);

  useEffect(() => {
    GetUsers().then(data => console.log(setContacts(data)))

  }, []);

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
            <Card onPress={() => navigation.navigate('Conversation',{ name: `${item.Name} ${item.Surname}`})}>
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
