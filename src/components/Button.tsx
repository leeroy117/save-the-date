import { useState } from "react";
import Modal from "./Modal";
import { isModalOpen } from '../modalStore';
import { useStore } from '@nanostores/react';

function Button() {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const $isModalOpen = useStore(isModalOpen);

    // const openModal = () => setIsModalOpen(true);
  
    // const closeModal = () => setIsModalOpen(false);

    return ( 
        <>
            <button className="
                text-lg text-[#333] p-4 px-8 rounded-md shadow-cButtonShadow 
                font-cinzelDecorative flex justify-center items-center
                hover:bg-[#333]
                hover:text-white
                transition-all
                duration-500
                hover:scale-110
                mt-6
                md:text-xl
                lg:mt-2 "
                // onClick={() => openModal()}
                onClick={() => isModalOpen.set(!$isModalOpen)}
            >
                Reserva tu lugar
            </button>

        </>
    );
}

export default Button;