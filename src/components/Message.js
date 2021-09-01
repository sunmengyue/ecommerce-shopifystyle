import React from 'react';

const Message = ({ children }) => {
  return (
    <div className="h-1/5 bg-red-300 text-red-900 font-semibold p-5">
      {children}
    </div>
  );
};

export default Message;
