import React, { useState } from 'react';

export default function Resumen(){
    const [state, setTsate] = useState(1)

    const continueCount = (e)=>{
        e.preventDefauelt
        setTsate(state + 1)
    } 
    const continueDecrement = (e)=>{
        e.preventDefauelt
        setTsate(state - 1)
    }     
    return(
        <div className='flex items-center justify-center lg:h-screen px-4 py-10 height-section'>
            <div className='flex flex-col flex-1 items-center w-full md:max-w-2xl lg:max-w-7xl'>
                <h1 className='font-bold text-2xl lg:text-4xl text-color'>Instituciones participantes</h1>
                <div className='flex flex-col md:flex-row lg:flex-row items-center gap-5 justify-between mt-10 lg:mt-20 w-full'>
                    <svg onClick={state === 1?null:continueDecrement} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4f4e50" className="cursor-pointer bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                    </svg>
                    {state === 1?<Naional />:null}
                    {state === 2?<Extranjero />:null}
                    <svg onClick={state === 2?null:continueCount} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4f4e50" className="cursor-pointer bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                    </svg>
                </div>
                <a href='#organizaciones'><button className='rounded-md border-color px-4 py-4 mt-10 bg-color text-color font-bold'>Ver organizaciones</button></a>
            </div>
        </div>
    );
}

function Naional(){
    return(
        <div className='flex flex-wrap gap-2 lg:gap-0 md:justify-center lg:justify-between w-full animate__animated lg:animate__bounceInLeft'>
            <div className='w-full md:w-96 lg:w-96 lg:h-64 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Instituto Nacional de Investigación en Glaciares y Ecosistemas de Montaña</h1>
                <h1 className='text-sm mt-1 text-color'>INAIGEM</h1>
                <h1 className='text-sm mt-1 text-color'>Unidad ejecutora peruana</h1>
                <h1 className='mt-5 text-color text-justify'>Mapeo de las formas de permafrost, diseño del prototipo de estación meteorológica, mapeo del perfil de las temperaturas del suelo y modelamiento del permafrost a nivel nacional.</h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-64 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Universidad Nacional Santiago Antúnez de Mayolo</h1>
                <h1 className='text-sm mt-1 text-color'>UNASAM</h1>
                <h1 className='text-sm mt-1 text-color'>Asociada peruana</h1>
                <h1 className='mt-5 text-color text-justify'>Asesoramiento sobre el mapeo de los suelos, cobertura vegetal y línea de nieve.</h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-64 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Universidad Nacional de Ingeniería</h1>
                <h1 className='text-sm mt-1 text-color'>UNI</h1>
                <h1 className='text-sm mt-1 text-color'>Asociada peruana</h1>
                <h1 className='mt-5 text-color text-justify'>Desarrollo del prototipo de drone meteorológico de código abierto.</h1>
            </div>
        </div>
    );
}

function Extranjero(){
    return(
        <div className='flex flex-wrap gap-2 lg:gap-0 md:justify-center lg:justify-between w-full animate__animated lg:animate__bounceInRight'>
            <div className='w-full md:w-96 lg:w-96 lg:h-64 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>University of Zurich</h1>
                <h1 className='text-sm mt-1 text-color'>UZH</h1>
                <h1 className='text-sm mt-1 text-color'>Asociada de Suiza</h1>
                <h1 className='mt-5 text-color text-justify'>Asesoramiento sobre el mapeo de formas de permafrost.</h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-64 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>University of Huddersfield</h1>
                <h1 className='text-sm mt-1 text-color'>UH</h1>
                <h1 className='text-sm mt-1 text-color'>Asociada británica</h1>
                <h1 className='mt-5 text-color text-justify'>Asesoramiento sobre el mapeo de formas de permafrost.</h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-64 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Université Savoie Mont Blanc</h1>
                <h1 className='text-sm mt-1 text-color'>USMB</h1>
                <h1 className='text-sm mt-1 text-color'>Colaboradora francesa</h1>
                <h1 className='mt-5 text-color text-justify'>Asesoramiento sobre la instalación de sensores de paredes de roca y modelamiento del permafrost.</h1>
            </div>
        </div>
    );
}