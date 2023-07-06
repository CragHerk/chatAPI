import React from "react";

const ResponseComponent = ({ response }) => {
  return (
    <div className="px-4 py-2 rounded-lg w-4/5 mx-auto mb-4 border border-gray-300 bg-gray-50 text-gray-800">
      {response}
    </div>
  );
};

export default ResponseComponent;
