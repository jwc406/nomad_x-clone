import { useState } from "react";
import styled from "styled-components";
import { CloseIcon } from "../components/icon-components";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return [isOpen, openModal, closeModal];
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  background: var(--box-Color);
  width: 500px;
  min-height: 600px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Modal = ({ isOpen, closeModal, children }: any) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={handleOutsideClick}>
          <ModalContent>
            <ModalHeader>
              <img src="src\assets\imgs\logo-lite.png" width="200px" alt="" />
              <CloseButton onClick={closeModal}>
                <CloseIcon />
              </CloseButton>
            </ModalHeader>
            {children}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
