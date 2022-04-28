import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";
import { useNavigate } from "react-router-dom";

export const Posts = () => {
  const [messages, setMessages] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://hfxe5q.sse.codesandbox.io/messages")
      .then((data) => {
        setMessages(data.data);
      })
      .then(messages);
  }, [messages]);
  const handleDelete = (id) => {
    axios.delete(`https://hfxe5q.sse.codesandbox.io/delete/${id}`);
  };
  return (
    <div className=" container">
      {messages.map((val, key) => {
        return (
          <div className="Post card" key={key}>
            <h1>
              {val.title.length > 20
                ? val.title.substring(0, 20) + "..."
                : val.title}
            </h1>
            <h5>
              By{" "}
              {val.author.length > 100
                ? val.author.substring(0, 100) + "..."
                : val.author + " "}
              on ({val.time})
            </h5>
            <h3>
              {val.message.length > 100
                ? val.message.substring(0, 100) + "..."
                : val.message}
            </h3>
            <div className="buttons">
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate(`/SinglePost/${val.id}`);
                }}
              >
                Read More
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(val.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
