import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BlogContext from "../context/Blog";
import { EvilIcons } from "@expo/vector-icons";

export default function ShowScreen({ navigation }) {
  const id = navigation.getParam("id");
  const { data } = useContext(BlogContext);
  console.log(data);
  const blogPost = data.find((blogPost) => blogPost.id === id); // through context we are getting all the blogposts that we provided. Now we want to find the one which id matches with the blogPost that we get through navigation
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};
