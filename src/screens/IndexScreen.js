import React, { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

export default function IndexScreen() {
  const { data, addBlogPost } = useContext(BlogContext); // when we call useContext its gonna give us whatever we added in the value prop inside the provider

  return (
    <View>
      <Text>Index screen</Text>
      <Button title="Add post" onPress={addBlogPost} />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={(blogPost) => blogPost.title}
      />
    </View>
  );
}
