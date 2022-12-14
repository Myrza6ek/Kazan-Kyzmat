import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
export const commentcontext = createContext();
const API = "http://localhost:8000/comments";

const INIT_STATE = {
  comments: [],
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_COMMENT":
      return {
        ...prevState,
        comments: action.payload.data,
      };
    default:
      return prevState;
  }
}

const ComContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // create
  async function AddComment(newComment) {
    try {
      await axios.post(API, newComment);

      readComment();
    } catch (error) {
      return error;
    }
  }

  async function readComment() {
    try {
      const res = await axios(API);
      // console.log(res);
      dispatch({
        type: "GET_COMMENT",
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteComment(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readComment();
    } catch (error) {
      return error;
    }
  }

  let cloud = {
    AddComment,
    deleteComment,
    readComment,
    commentsArr: state.comments,
  };

  return (
    <commentcontext.Provider value={cloud}>{children}</commentcontext.Provider>
  );
};

export default ComContextProvider;
