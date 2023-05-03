import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function BlogPostForm({ onSubmit }) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  return (
    <View>
      <Text style={styles.label}>title</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>content</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
      />
      <Button title="Save" onPress={() => onSubmit(title, content)} />
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
