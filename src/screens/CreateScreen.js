import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import BlogContext from "../context/Blog";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.pop());
      }}
    />
  );
}
