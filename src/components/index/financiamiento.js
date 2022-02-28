import React, { useState } from 'react';

export default function Financiamiento(){
    const [state, setState] = useState({number:"1"});
    const eventoHundle = (e)=>{
        e.preventDefault();
        setState({number:e.target.id})
    }
    return(
        <div className='flex items-center py-10 lg:h-screen px-4 height-section' id='financiamiento'>
            <div className='flex flex-col items-center w-full md:max-w-2xl lg:max-w-6xl mx-auto'>
                <div className='flex flex-col items-center w-full lg:max-w-3xl'>
                    <h1 className='font-bold text-2xl lg:text-4xl text-color'>Financiamiento</h1>
                    <h1 className='mt-5 text-base text-center text-color'>Esta investigación fue financiada por el Proyecto Concytec -
                        Banco Mundial “Mejoramiento y Ampliación de los Servicios
                        del Sistema Nacional de Ciencia Tecnología e Innovación
                        Tecnológica” 8682-PE, a través de su unidad ejecutora
                        ProCiencia [Contrato N°23-2018-FONDECYT-BM-IADT-MU].
                    </h1>
                </div>
                <div className='flex flex-wrap justify-center gap-3 mt-5'>
                    <img className='w-24 md:w-36 lg:w-48 cover-contain' src='/logos/perugrows/Concytec.PNG'/>
                    <img className='w-24 md:w-36 lg:w-40 cover-contain ml-8' src='/logos/perugrows/ProCiencia.jpg'/>
                    <img className='w-32 md:w-48 lg:w-64 cover-contain' src='/logos/perugrows/Logo-BancoMundial.png'/>
                </div>
            </div>
        </div>
    );
}