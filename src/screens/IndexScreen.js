import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import Blog from "../context/Blog";
import { Entypo } from "@expo/vector-icons";

export default function IndexScreen() {
  const { data, addBlogPost } = useContext(Blog); // when we call useContext its gonna give us whatever we added in the value prop inside the provider

  return (
    <View>
      <Button title="Add post" onPress={addBlogPost} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <Entypo style={styles.icon} name="trash" />
          </View>
        )}
        keyExtractor={(blogPost) => blogPost.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
