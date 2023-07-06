import React, { useState } from "react";
import InputComponent from "./Components/InputComponent";
import ResponseComponent from "./Components/ResponseComponent";
import MessageComponent from "./Components/MessageComponent";
import sendMessage from "./utils/api";

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const apiResponse = await sendMessage(message);
    const newMessage = { content: message, isResponse: false };
    const newResponse = { content: apiResponse, isResponse: true };
    setMessages((prevMessages) => [...prevMessages, newMessage, newResponse]);
  };

  return (
    <div className="flex flex-col items-center justify-end h-screen">
      {messages.map((message, index) =>
        message.isResponse ? (
          <ResponseComponent key={index} response={message.content} />
        ) : (
          <MessageComponent key={index} message={message.content} />
        )
      )}
      <InputComponent onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
