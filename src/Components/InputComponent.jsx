// InputComponent.js
import React, { useState } from "react";

const InputComponent = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <input
      className="px-4 py-2 mb-4 h-10 w-1/3 border border-grey-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500  "
      type="text"
      placeholder="zapytaj . . ."
      value={message}
      onChange={handleMessageChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default InputComponent;
