import React from 'react';

interface ModalProps {
  isOpen: boolean; 
  onClose: () => void; 
  children: React.ReactNode; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null; 

  return (
    <div className="absolute w-[100svw] 
    h-screen top-0 -translate-y-1/2 inset-0 bg-transparent 
    bg-opacity-50 flex justify-center items-center 
    box-border
    z-50">
      <div className="bg-primary rounded-lg w-full flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;