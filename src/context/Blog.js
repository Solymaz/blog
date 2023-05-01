import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (blogPosts, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [
        ...blogPosts,
        {
          id: Math.floor(Math.random() * 999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogPost":
      return blogPosts.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return blogPosts;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = (title, content) => {
    dispatch({ type: "add_blogPost", payload: { title, content } });
  };
  const deleteBlogPost = (id) => {
    dispatch({ type: "delete_blogPost", payload: id });
  };
  return (
    <BlogContext.Provider
      value={{ data: blogPosts, addBlogPost, deleteBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
