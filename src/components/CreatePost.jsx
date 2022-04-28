import axios from "axios";
import React, { useState } from "react";
import "./CreatePost.css";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
     
      axios.post("https://hfxe5q.sse.codesandbox.io/messages/new", {
        title: title,
        author: author,
        message: message,
      });
     
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
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          name="message"
          placeholder="Message"
          id="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
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
