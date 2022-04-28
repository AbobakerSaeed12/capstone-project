import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";
export const Posts = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get("https://hfxe5q.sse.codesandbox.io/messages")
      .then((data) => {
        setMessages(data.data);
      })
      .then(messages);
  }, [messages]);

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
              >
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};