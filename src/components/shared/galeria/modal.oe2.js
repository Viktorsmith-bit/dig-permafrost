import React from 'react';
import {useState} from 'react';
import { listaOE2} from './listaJson/lista.galeria';

export default function Modal(props){
    const [state, setState] = useState(()=>{
        return (parseInt(props.idItem));
    });

    const back = (e)=>{
        e.preventDefault();
        if(state < listaOE2.length){
            return setState(state + 1);
        }
    }
    const next = (e)=>{
        e.preventDefault();
        if(state > listaOE2[0].id){
            return setState(state - 1)
        }
    }

    return(
        <div className='absolute h-screen top-0 z-40 w-full'>
            <div className='fixed flex justify-center h-screen w-full'>
                <div className='flex flex-col justify-start lg:justify-center md:justify-between lg:justify-center w-full opacity lg:py-10 h-screen'>
                    <div className='flex items-center justify-between'>
                        <code><h1 onClick={next} className='hidden lg:flex justify-center items-center bg-gray-100 color w-12 h-12 text-xl cursor-pointer'>{`<`}</h1></code>
                        <div className='flex items-center justify-center'>
                            {listaOE2.map((e) =>{
                                if(e.id === state){
                                    return <div className='flex flex-col lg:flex-row h-screen lg:h-auto'>
                                        <div className='relative'>
                                            <img className={`${e.cover} height-image width-image`} src={`${e.url}`}/>
                                            <>
                                                <code><h1 onClick={next} className='flex justify-center items-center absolute bottom-0 left-0 lg:hidden bg-gray-100 color w-12 h-12 text-xl cursor-pointer'>{`<`}</h1></code>
                                                <code><h1 onClick={back} className='flex justify-center items-center absolute bottom-0 right-0 lg:hidden bg-gray-100 color w-12 h-12 text-xl cursor-pointer'>{`>`}</h1></code>
                                            </>
                                            <svg onClick={props.close} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="absolute top-3 left-3 cursor-pointer bi bi-x-lg" viewBox="0 0 16 16">
                                                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                                            </svg>
                                        </div>
                                        <div className='flex flex-col justify-between w-full lg:w-80 bg-gray-100 px-4 py-4 h-full lg:h-auto'>
                                            <div className='container'>
                                                <h1 className='text-xl font-bold text-color text-color'>{e.titulo}</h1>
                                                <div className='border-b border-gray-400 pb-2 mt-1'>
                                                    <h1 className='text-sm text-color text-color'>{e.subTitulo}</h1>
                                                    <div className='flex justify-between'>
                                                        <h1 className='text-sm text-color text-color'>{e.lugar}</h1>
                                                        <h1 className='text-sm text-color text-color'>{e.fecha}</h1>
                                                    </div>
                                                    </div>
                                                    <h1 className='text-base mt-5 text-color text-justify'> {e.descripcion}</h1>
                                                </div>
                                            <h1 className='text-xs text-justify text-color text-color'>©2022 Permafrost. Todos los derechos reservados. Para obtener la imagen en calidad original ponerse en contacto al correo katydamacia@gmail.com.</h1>
                                        </div>
                                </div>
                                }
                            }) 
                            }
                        </div>
                        <code><h1 onClick={back} className='hidden lg:flex justify-center items-center bg-gray-100 color w-12 h-12 text-xl cursor-pointer'>{`>`}</h1></code>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}