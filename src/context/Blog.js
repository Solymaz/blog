import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (blogPosts, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }];
    default:
      return blogPosts;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blogPost" });
  };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
