import { useState } from "react";
import Modal from "./Modal";

function Button() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
  
    const closeModal = () => setIsModalOpen(false);

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
                onClick={() => openModal()}
            >
                Reserva tu lugar
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal} >
                <div className="p-12 bg-[#ddd4c0] rounded-md shadow-cModalShadow ">
                    <div className="w-full flex flex-row justify-end items-center pb-5">
                        <button onClick={() => closeModal()}>X</button>
                    </div>
                    <form className="flex flex-col justify-center items-center gap-2">
                        {/* Your form fields */}
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
                            onClick={() => closeModal()}
                        >
                            Reservar
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    );
}

export default Button;