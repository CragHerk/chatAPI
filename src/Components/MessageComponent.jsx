import React from "react";

const MessageComponent = ({ message }) => {
  return (
    <div className="px-4 py-2 rounded-lg w-4/5 mx-auto mb-4 border border-gray-300 text-gray-800 bg-gray-200 ">
      {message}
    </div>
  );
};

export default MessageComponent;
