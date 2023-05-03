import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../context/Blog";

export default function EditScreen({ navigation }) {
  const id = navigation.getParam("id");
  return (
    <View>
      <Text>Edit {id}</Text>
    </View>
  );
}
