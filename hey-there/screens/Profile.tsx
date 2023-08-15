import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GetUserById, SignOut, UpdateProfile } from "../hooks/firebaseHooks";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button } from 'react-native-elements';


export const Profile = () => {

  const [user, setUser] = useState<any>([]);
  const [nameInput,setNameInput] = useState(false)
  const [surnameInput,setSurnameInput] = useState(false)
  const [emailInput,setEmailInput] = useState(false)
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const handleSignOut =()=>{    
    SignOut()
  }

  const updateUser = (docId: string, field: string, value: string) =>{    
    UpdateProfile(docId,field, value)
  }

  useEffect(() => {
    GetUserById("ID1234567").then(data => {
      //console.log(data)
      setUser(data)  
       })
  
  })


  return (
    <SafeAreaView className={`flex-1`}>
     <View className="flex-1 items-center justify-center gap-6">
        <Image
          source={require("../assets/profile-pic.png")}
          className="w-40 h-40 rounded-full"
          resizeMode={"cover"}
        />
      </View>

     
        {user.map((item: any) => (
         <ScrollView 
         key={item.UserId}
         scrollEnabled={true} 
         nestedScrollEnabled={true} 
         showsVerticalScrollIndicator={false} 
         contentContainerStyle={{
           paddingBottom: 25,
           paddingLeft: 15
         }}
         className="flex-1 space-y-2 ">
        <Text className="text-base pl-4">Name:</Text>
        <View style={{ flexDirection: 'row' }}>
            <TextInput
              placeholder="Name"
              className="w-[70%] h-[35px] border border-black bg-white rounded-[6px] pl-2 ml-4 text-[15px]"
              defaultValue={item.Name} 
              editable={nameInput} 
              onChangeText={(txt) => setName(txt)}
              />
            <Button
              icon={<Ionicons
                name= {nameInput ? "close-outline":"create-outline" }
                size={25}
                color={nameInput ? "red":"black" } />}
              containerStyle={{
                width: 40,
                marginLeft: 2,
              }}
              type="clear"
              onPress={() => setNameInput(!nameInput)} />
              <Button
              icon={<Ionicons
                name= "checkmark-outline"
                size={25}
                color="green" />}
              containerStyle={{
                width: 40,
                marginLeft: 2,
                display: nameInput ? "flex" : "none"
              }}
              type="clear"
              onPress={() => {
                updateUser(item.docId, 'Name',name)
                setNameInput(!nameInput)}
                } />
          </View>
          
          <Text className="text-base pl-4">Surname:</Text><View style={{ flexDirection: 'row' }}>
              <TextInput
                placeholder="Surname"
                className="w-[70%] h-[35px] pl-2 ml-4 border border-black bg-white rounded-[6px] text-[15px]"
                defaultValue={item.Surname} 
                editable={surnameInput}
                onChangeText={(txt) => setSurname(txt)}
                />
              <Button
                icon={<Ionicons
                  name= {surnameInput ? "close-outline":"create-outline" }
                  size={25}
                  color={surnameInput ? "red":"black" }  />}
                containerStyle={{
                  width: 40,
                  marginLeft: 2,
                }}
                type="clear" 
                onPress={() => setSurnameInput(!surnameInput)}
                />
                <Button
              icon={<Ionicons
                name= "checkmark-outline"
                size={25}
                color="green" />}
              containerStyle={{
                width: 40,
                marginLeft: 2,
                display: surnameInput ? "flex" : "none"
              }}
              type="clear"
              onPress={() => {
                updateUser(item.docId, 'Surname',surname)
                setNameInput(!surnameInput)}} />
            </View>
            
            <Text className="text-base pl-4">Email:</Text><View style={{ flexDirection: 'row' }}>
              <TextInput
                placeholder="Email"
                className="w-[70%] h-[35px] border border-black bg-white rounded-[6px] pl-2 ml-4 text-[15px]" 
                defaultValue={item.Email}
                editable={emailInput} 
                onChangeText={(txt) => setEmail(txt)}
                />
              <Button
                icon={<Ionicons
                  name= {emailInput ? "close-outline":"create-outline" }
                  size={25}
                  color={emailInput ? "red":"black" }  />}
                containerStyle={{
                  width: 40,
                  marginLeft: 2,
                }}
                type="clear" onPress={() => setEmailInput(!emailInput)}/>
                <Button
              icon={<Ionicons
                name= "checkmark-outline"
                size={25}
                color="green" />}
              containerStyle={{
                width: 40,
                marginLeft: 2,
                display: emailInput ? "flex" : "none"
              }}
              type="clear"
              onPress={() => {
                updateUser(item.docId, 'Email',email)
                setNameInput(!emailInput)}} />
            </View>

            <Text style={{ color: `#0000EE` }} className="text-base pl-4">
           Change password?
        </Text>
        <View className=' space-y-4 items-center '>
        <TouchableOpacity  className="bg-[#d90429] w-[40%] h-[35%] rounded-[6px]" onPress={handleSignOut}>
          <Text className="text-white font-bold text-center text-[16px] py-1">LogOut</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
        ))}
        {/* <Text className="text-base pl-4">Password:</Text>
        <TextInput
          placeholder="Password"
          className="w-[90%] h-[35px] border border-black bg-white rounded-[6px] pl-2 ml-4 text-[15px]"
        /> */}

    
    </SafeAreaView>
  );
};
