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
  const [blogPosts, dispatch] = useReducer(blogReducer, [
    { id: 1, title: "test", content: "hi" },
  ]);

  const addBlogPost = (title, content) => {
    dispatch({ type: "add_blogPost", payload: { title, content } });
  };

  /* 
  If anything fo wrong with the request we will not run the dispatch or the callBack(which is navigating the user to the indexScreen)
  instead we catch the error. And we can handle a request resulting an error and not immediately navigating the user to the indexScreen.
   const addBlogPost = dispatch => {
    return async (title, content, callBack) => {
    try{
    await axios.post("abs", title, content)
    dispatch({ type: "add_blogPost", payload: { title, content } });
    callBack(); 
      } catch (e) {
        ...
      }
    }
  };
  */
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
