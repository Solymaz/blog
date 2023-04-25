import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

export default function IndexScreen() {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <Text>Index screen</Text>
      <FlatList
        data={blogPosts}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={(blogPost) => blogPost.title}
      />
    </View>
  );
}
