import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogContext from "../context/Blog";

export default function CreateScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setConetnt] = useState("");
  const { addBlogPost } = useContext(BlogContext);

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
      <Button
        title="Add Blog Post"
        onPress={() => {
          title.length > 0 && content.length > 0 && addBlogPost(title, content); // in case we want to make a network request to an outside API and then we want to wait for a response
          navigation.navigate("Index"); // that the blog post is successfully created before we navigato to the indexScreen in that case we do: addBlogPost(title, content, () => { navigation.navigate("Index") }) "check Blog.js"
        }}
      />
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
