import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import BlogContext from "../context/Blog";

export default function EditScreen({ navigation }) {
  const { data, editBlogPost } = useContext(BlogContext);
  const id = navigation.getParam("id");

  const blogPost = data.find((blogPost) => blogPost.id === id); // through context we are getting all the blogposts that we provided. Now we want to find the one which id matches with the blogPost that we get through navigation

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(title, content, id, () => navigation.navigate("Show"));
      }}
    />
  );
}
