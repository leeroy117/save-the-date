import React, { useEffect, useState } from 'react';
import { isModalOpen } from '../modalStore';
import { useStore } from '@nanostores/react';

interface ModalProps {
//   isOpen: boolean; 
//   onClose: () => void; 
  // children: React.ReactNode; 
}

const Modal: React.FC<ModalProps> = () => {
  const $isModalOpen = useStore(isModalOpen);

  const onHandleSend = (e: any) => {
    e.preventDefault();
    isModalOpen.set(!$isModalOpen)
  }

  console.log('modalopen', $isModalOpen);
  return (
    // ${$isModalOpen ? 'absolute animate__animated animate__fadeInDown animate__faster' : 'hidden'}
    <div className={` w-[100svw] 
    h-screen top-0 inset-0 bg-transparent 
    bg-opacity-50 flex justify-center items-center 
    box-border
    ${$isModalOpen ? 'absolute animate__animated animate__fadeInDown' : 'hidden'}
    z-50`}>
      <div className="bg-primary rounded-lg w-full flex flex-col justify-center items-center">

      <div className="p-12 bg-[#ddd4c0] rounded-md shadow-cModalShadow">
        <div className="w-full flex flex-row justify-end items-center pb-5">
          <button onClick={() => isModalOpen.set(!$isModalOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
	            <path fill="currentColor" d="M15.1 3.1L12.9.9L8 5.9L3.1.9L.9 3.1l5 4.9l-5 4.9l2.2 2.2l4.9-5l4.9 5l2.2-2.2l-5-4.9z"></path>
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-bold font-cinzelDecorative text-center mb-2">¡Confirma tu asistencia!</h2>
        <p className="text-sm text-gray-600 text-center font-playfairDisplay">¡Qué alegría que estés con nosotros! Confirma tu asistencia y celebremos juntos.</p>

        <form className="flex flex-col justify-center items-center gap-2 mt-3">
          <input className="lg:w-96 w-full rounded-sm h-8 flex flex-row justify-start items-center p-2 bg-[#EEE9DF]" type="text" placeholder="Nombre" />
          <input className="lg:w-96 w-full rounded-sm h-8 flex flex-row justify-start items-center p-2 bg-[#EEE9DF]" type="text" placeholder="Apellidos" />
          <input className="lg:w-96 w-full rounded-sm h-8 flex flex-row justify-start items-center p-2 bg-[#EEE9DF]" type="number" placeholder="Teléfono" />
          <button className="
            text-sm text-[#333] p-2 px-8 rounded-md shadow-cButtonShadow 
            font-cinzelDecorative flex justify-center items-center
            bg-[#EAE5D9]
            hover:bg-[#333]
            hover:text-white
            transition-all
            duration-500
            hover:scale-110
            mt-6
            md:text-md
            lg:mt-2 "
            onClick={onHandleSend}
          >
            Reservar
          </button>
        </form>
		</div>
      </div>
    </div>
  );
};

export default Modal;