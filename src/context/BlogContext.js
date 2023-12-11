import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payLoad.title,
          content: action.payLoad.content,
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPosts) => blogPosts.id !== action.payLoad);
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payLoad.id ? action.payLoad : blogPost;
      });

    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    try {
      // await axios.post("adsdas", title, content);
      dispatch({ type: "add_blogpost", payLoad: { title, content } });
      if (callback) {
        callback();
      }
    } catch (error) {}
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payLoad: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payLoad: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "TEST POST", content: "TEST CONTENT", id: 1 }]
);

// import React, { useState } from "react";

// const BlogContext = React.createContext();

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, setBlogPosts] = useState([]);

//   const addBlogPost = () => {
//     console.log("====================================");
//     console.log("add blog post pressed");
//     console.log("====================================");
//     setBlogPosts([
//       ...blogPosts,
//       { title: `Blog Post #${blogPosts.length + 1}` },
//     ]);
//   };

//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
