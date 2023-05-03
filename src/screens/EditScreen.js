import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ navigation }) {
  const { data } = useContext(BlogContext);

  const blogPost = data.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  ); // through context we are getting all the blogposts that we provided. Now we want to find the one which id matches with the blogPost that we get through navigation

  return <BlogPostForm blogPost={blogPost} />;
}
