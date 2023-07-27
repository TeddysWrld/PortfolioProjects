import {
  SafeAreaView,
  FlatList,
  Text,
} from "react-native";
import React from "react";
import {
  Card,
  Container,
  HeadContainer,
  HeaderText,
  SearchBarInput,
  TextSection,
  UserImg,
  UserImgWrapper,
  UserInfo,
  UserInfoText,
  UserName,
} from "../styles/ChatsStyles";
import { ListItem, SearchBar } from "react-native-elements";

const contacts = [
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card onPress={() => navigation.navigate('Conversation',{ name: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
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
