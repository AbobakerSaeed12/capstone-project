import axios from "axios";
import React, { useState } from "react";
import "./CreatePost.css";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      message.trim().length &&
      title.trim().length &&
      author.trim().length > 0
    ) {
      axios.post("https://hfxe5q.sse.codesandbox.io/messages/new", {
        title: title,
        author: author,
        message: message,
      });
      redirect();
    } else {
      alert("enter a post");
    }
  };

  return (
    <div className="form">
      <form>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          maxlength="40"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="author">Author: </label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          maxlength="20"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <label htmlFor="message">Message: </label>
        <textarea
        
          name="message"
          placeholder="Message"
          id="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
