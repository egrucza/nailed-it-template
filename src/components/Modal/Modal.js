import React from 'react';
import './Modal.css';

const Modal = ({title, content, setIsOpen}) => {

  return (
    <div className='modal'>
      <div className='modal-content'>
        <button className={'modal-close'} onClick={() => setIsOpen(false)}></button>
        <div className='modal-header'>
          <h4 className='modal-title'>{title}</h4>
        </div>
        <div className='modal-body'>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;