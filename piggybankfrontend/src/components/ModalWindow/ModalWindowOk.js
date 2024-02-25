import React, { Fragment,useEffect, useState } from 'react';
import axios from 'axios'
import Modal from 'react-modal';

const ModalWindowOk =() => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
    
    const closeModal = () => {
      setModalIsOpen(false);
    };

    const modalContent = (
        <div className="right-content">
          <h2>Успех!</h2>
          <p>Текст модального окна</p>
          <button onClick={closeModal}>Закрыть</button>
        </div>
      );


      return (
        <div>
            <h1>Modal</h1>
          <button onClick={openModal}>Открыть модальное окно</button>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            {modalContent}
          </Modal>
        </div>
      );
}
export default ModalWindowOk;