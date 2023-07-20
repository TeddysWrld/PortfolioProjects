import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { hexColours } from "../constants";

export const Profile = () => {
  return (
    <SafeAreaView className={`flex-1 space-y-7`}>
      <View className="flex-1 items-center justify-center gap-8">
        <Image
          source={require("../assets/profile-pic.png")}
          className="w-40 h-40 rounded-full"
          resizeMode="cover"
        />
      </View>

      <ScrollView scrollEnabled={true} nestedScrollEnabled={true} showsVerticalScrollIndicator={false} className="flex-1 space-y-2">
        <Text className="text-base pl-4">Name:</Text>
        <TextInput
          placeholder="Name"
          className="w-[90%] h-[35px] border border-black bg-white rounded-[6px] pl-2 ml-4 text-[15px]"
        />

        <Text className="text-base pl-4">Surname:</Text>
        <TextInput
          placeholder="Surname"
          className="w-[90%] h-[35px] pl-2 ml-4 border border-black bg-white rounded-[6px] text-[15px]"
        />

        <Text className="text-base pl-4">Email:</Text>
        <TextInput
          placeholder="Email"
          className="w-[90%] h-[35px] border border-black bg-white rounded-[6px] pl-2 ml-4 text-[15px]"
        />

        <Text className="text-base pl-4">Password:</Text>
        <TextInput
          placeholder="Password"
          className="w-[90%] h-[35px] border border-black bg-white rounded-[6px] pl-2 ml-4 text-[15px]"
        />

        <Text style={{ color: `#0000EE` }} className="text-base pl-4">
           Change password?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
