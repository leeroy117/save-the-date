import React, { useEffect, useState } from 'react';
import { isModalOpen } from '../modalStore';
import { useStore } from '@nanostores/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export const validationCommentSchema = Yup.object({
  name: Yup.string().required('El Nombre es requerido'),
  lastname: Yup.string().required('El Apellido es requerido'),
  phone: Yup.string().required('El Telefono es requerido').matches(
    /^[0-9]{10}$/, // Expresión regular para un número de 10 dígitos
    'El teléfono debe tener exactamente 10 dígitos numéricos'
  ),
});

const Modal = () => {
  const $isModalOpen = useStore(isModalOpen);

  

  // const onHandleSend = (e: any) => {
  //   e.preventDefault();
  //   isModalOpen.set(!$isModalOpen)
  // }

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

        <Formik
        initialValues={{
          name: '',
          lastname: '',
          phone: '',
        }}
        validationSchema={validationCommentSchema}
        onSubmit={async (values, {setSubmitting}) => {
          try {
            // dispatch(updateComment({id: id, comment: values.comment, email: values.email}))
            // setSubmitting(false);
            // closeModal();
            const response = await axios.post('https://app-fernandayernesto-api-8d26bea62337.herokuapp.com/invitados', {
              "nombre": values.name,
              "apellidos": values.lastname,
              "telefono": values.phone
            })

            console.log('response', response);
            isModalOpen.set(!$isModalOpen)
          } catch (error) {
            console.log("🚀 ~ FormAddComment ~ error:", error)
            
          }
        }}
      >
      {({isValid, dirty, isSubmitting}) => (
        <Form> 
            <div className='flex flex-col justify-center items-center gap-4 w-full'>
                <div className="w-full">
                    <Field
                        className='w-full h-12 p-4 rounded-md bg-[#EEE9DF] text-black placeholder-gray-400'
                        type="text"
                        id="name"
                        name="name"
                        placeholder={'Juan'}
                    />
                    <ErrorMessage name="name" component="div" className="text-black" />
                </div>

                <div className="w-full">
                    <Field
                        className='w-full h-12 p-4 rounded-md bg-[#EEE9DF] text-black placeholder-gray-400'
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder={'García'}
                    />
                    <ErrorMessage name="lastname" component="div" className="text-black" />
                </div>

                <div className="w-full">
                    <Field
                        className='w-full h-12 p-4 rounded-md bg-[#EEE9DF] text-black placeholder-gray-400'
                        type="number"
                        id="phone"
                        name="phone"
                        placeholder={'6671234567'}
                    />
                    <ErrorMessage name="phone" component="div" className="text-black" />
                </div>

                <div className="flex flex-col gap-2">
                    {/* <button 
                        className={`text-white p-4 rounded-md flex flex-row justify-center items-center ${!isValid || !dirty ? '' : ''}`} 
                        type="submit"
                        disabled={!isValid || !dirty || isSubmitting}
                    >Edit</button> */}

                    <button className={`
                      text-sm text-[#333] p-2 px-8 rounded-md shadow-cButtonShadow 
                      font-cinzelDecorative flex justify-center items-center
                      bg-[#EAE5D9]
                      
                      ${!isValid || !dirty ? '' : 'hover:bg-[#333] hover:text-white hover:scale-110'}
                      transition-all
                      duration-500
                      
                      mt-6
                      md:text-md
                      lg:mt-2`}
                      // onClick={onHandleSend}
                      type="submit"
                        disabled={!isValid || !dirty || isSubmitting}
                    >
                      Reservar
                    </button>
                    
                </div>


            </div>
        </Form>
      )}
    </Formik>
        {/* <form className="flex flex-col justify-center items-center gap-2 mt-3">
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
        </form> */}
		</div>
      </div>
    </div>
  );
};

export default Modal;