import React from 'react';

export default function Resumen(props){
    return(
        <div className='absolute h-screen top-0 z-40 w-full'>
            <div onClick={props.closeModalResumen} className='fixed flex justify-center items-center h-screen w-full opacity p-4 md:p-8 lg:p-10'> 
                <img className='flex-1 w-56 lg:max-w-xl cover-contain' src='/logos/perugrows/Objetivos_Permafrost_v3.png'/>
            </div>
        </div>
    );
}