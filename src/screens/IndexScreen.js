import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Blog from "../context/Blog";
import { Entypo } from "@expo/vector-icons";

export default function IndexScreen() {
  const { data, addBlogPost, deleteBlogPost } = useContext(Blog); // when we call useContext its gonna give us whatever we added in the value prop inside the provider

  return (
    <View>
      <Button title="Add post" onPress={addBlogPost} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>
              {item.title}
              {item.id}
            </Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Entypo style={styles.icon} name="trash" />
            </TouchableOpacity>
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
