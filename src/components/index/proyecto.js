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
            <div className='flex items-center items-center bg-gray-100 height-section'>
                <div className='flex w-full lg:flex-1 justify-center px-4 lg:px-0'>
                    <div className='w-full md:max-w-2xl lg:max-w-xl'>
                        <h1 className='text-2xl lg:text-4xl font-bold text-color'>Resumen</h1>
                        <h1 className='mt-5 text-justify text-color'>El permafrost puede representar una reserva de agua dulce potencialmente significativa y su contribución a los recursos hídricos locales probablemente aumente en el futuro a medida que los glaciares se retiren hacia elevaciones superiores y desaparezcan como respuesta al cambio climático. Sin embargo, a pesar del potencial de este recurso, a la fecha, en el Perú existen pocos estudios sobre su valoración como recurso hídrico y hace falta un inventario de su distribución que sirva como insumo para la gestión de los recursos hídricos.</h1>
                        <h1 className='mt-5 text-justify text-color'>El proyecto Permafrost tuvo como objetivo principal identificar la distribución espacio temporal de permafrost en el Perú adaptando y/o aplicando modelos matemáticos, estadísticos, usando imágenes satelitales y variables climáticas, con la finalidad de generar una base geoespacial que permita visualizar la distribución y formas del permafrost en el Perú, y sea de utilidad para la gestión del territorio.</h1>
                        <button onClick={openModalResumen} className='px-5 lg:px-8 py-2 lg:py-3 border-color bg-color mt-5 rounded-md text-color font-bold'>Objetivos</button>
                    </div>
                </div>
                <div className='flex-1'>
                    <img className='cover h-screen hidden lg:block height-section' src='/fondos/TrabajosCampo_Permafrost.jpeg' />
                    <h1></h1>
                </div>
            </div>
        </div>
    );
}
