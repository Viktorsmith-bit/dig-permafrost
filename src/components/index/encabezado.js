import React from 'react';

export default function Header(){
    return(
        <div className='image'>
            <div className='flex flex-wrap flex-col lg:justify-center lg:h-screen py-10 md:py-20 lg:py-0 px-4 md:px-10 lg:px-10'>
                <h1 className='text-white text-right font-bold mt-16 md:mt-10 lg:mt-0 text-sm'>Nevado Coropuna (Arequipa), 2020</h1>
                <div className='flex flex-col items-center w-full md:max-w-xl lg:max-w-2xl mt-48 md:mt-56 lg:mt-56 mx-auto'>
                    <h1 className='font-bold text-white text-base lg:text-3xl'>PROYECTO</h1>
                    <h1 className='font-extrabold text-4xl lg:text-8xl text-white'>PERMAFROST</h1>
                    <h1 className='text-white text-base md:text-xl lg:text-xl text-center'>Evaluación y estimación de la distribución espacio temporal de permafrost a nivel nacional como potencial de reserva hídrica</h1>
                </div>
            </div>
        </div>
    );
}