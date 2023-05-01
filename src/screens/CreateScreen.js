import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function CreateScreen({ navigation }) {
  const [title, setTitle] = useState();
  const [content, setConetnt] = useState();

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setConetnt(text)}
      />
      <Button title="Add Blog Post" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    padding: 5,
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    margin: 10,
  },
});
