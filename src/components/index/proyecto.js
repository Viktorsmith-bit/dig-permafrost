import {useState} from 'react';
import Resumen from '../shared/proyecto/resumen.modal';
import React from 'react';

export default function Proyectos(){
    const [state, setState] = useState(false);

    const openModalResumen = (e)=>{
        e.preventDefault();
        setState(true)
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'hidden';
    }
    const closeModalResumen = (e)=>{
        e.preventDefault();
        setState(false)
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'visible';
    }

    return(
        <div id='proyecto'>
            {!state?null:<Resumen closeModalResumen={closeModalResumen} />}
            <div className='flex items-center items-center lg:h-screen py-10 lg:py-0 bg-gray-100' style={{height:"38rem"}}>
                <div className='flex w-full lg:flex-1 justify-center px-4 lg:px-0'>
                    <div className='w-full md:max-w-2xl lg:max-w-xl'>
                        <h1 className='text-2xl lg:text-4xl font-bold text-color'>Resumen</h1>
                        <h1 className='mt-5 text-justify text-color'>El permafrost podría representar una reserva de agua potencialmente significativa, donde, la contribución de agua dulce que proveen probablemente aumente en el futuro a medida que los glaciares se retiren hacia elevaciones superiores y/o desaparezcan en respuesta al cambio climático. A pesar del potencial de este recurso, a la fecha en el Perú existen pocos estudios sobre su valoración como recurso hídrico y hace falta un inventario o mapa de su distribución nacional que sirva como insumo para la gestión de los recursos hídricos.
                        </h1>
                        <h1 className='mt-5 text-justify text-color'>El proyecto Permafrost tiene como objetivo principal identificar la distribución espacio temporal de permafrost en el Perú adaptando y/o aplicando modelos matemáticos, usando imágenes satelitales y variables climáticas, con la finalidad de generar una base geoespacial que permita visualizar la distribución y formas del permafrost en el Perú y sea de utilidad para la gestión del territorio.</h1>
                        <button onClick={openModalResumen} className='px-5 lg:px-8 py-2 lg:py-3 border-color bg-color mt-5 rounded-md text-color font-bold'>Objetivos</button>
                    </div>
                </div>
                <div className='flex-1'>
                    <img style={{height:"38rem"}} className='cover h-screen hidden lg:block' src='/fondos/TrabajosCampo_Permafrost.jpeg' />
                    <h1></h1>
                </div>
            </div>
        </div>
    );
}
