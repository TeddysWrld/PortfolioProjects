import {
  StyleSheet,
  Text,
  SafeAreaView,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import { hexColours } from "../constants";
import { Card, Container, MessageText, PostTime, TextSection, UserImg, UserImgWrapper, UserInfo, UserInfoText, UserName } from "../styles/ChatsStyles";

const messages = [
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

const Header_Max_Height = 80;

const DynamicHeader = ({value}: any) => {
  
  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Header_Max_Height],
    outputRange: [0, -Header_Max_Height],
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          transform:  [{ translateY:animatedHeaderHeight}],
        },
      ]}>
      <Text style={styles.title}>Chats</Text>
    </Animated.View>
  );
};

export const Chats = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const diffClampScrollY = Animated.diffClamp(scrollOffsetY, 0, Header_Max_Height);
 
  return (
    <SafeAreaView style={{flex: 1}}>
     
        <DynamicHeader value={diffClampScrollY} />
        <Container >
            <Animated.FlatList 
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
                {useNativeDriver: true} 
              )}
              style={{flex: 1, marginTop:Header_Max_Height}}
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={({item}) =>(
                <Card>
                  <UserInfo>
                  <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
                  </UserInfo>
                </Card>
              )}
              ></Animated.FlatList>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#ffffff",
    zIndex: 1000,
    elevation: 1000,
    height: Header_Max_Height,
    overflow: 'hidden',
  },
  title: {
    color: `${hexColours.Purple}`,
    fontWeight: "bold",
    fontSize: 35,
    paddingTop: 35,
    paddingLeft: 12
  }
});
