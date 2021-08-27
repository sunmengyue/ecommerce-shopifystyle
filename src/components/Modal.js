import React from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
  return ReactDOM.createPortal(
    <div>
      <div className="bg-white">modal body</div>
    </div>,
    document.querySelector('#modal'),
  );
};

export default Modal;
