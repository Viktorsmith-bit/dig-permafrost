import React from 'react';

export default function Organizaciones(){
    return(
        <div className='flex' id='organizaciones'>
            <div className='flex flex-1 justify-center items-center' style={{backgroundColor:'#5b5b5f'}}>
                <div className='flex-1 w-full md:max-w-2xl lg:max-w-2xl px-4 lg:px-0'>
                    <h1 className='text-white text-2xl lg:text-4xl font-bold'>Organizaciones</h1>
                    <h1 className='text-white font-bold mt-5 text-center mt-10'>Entidad ejecutora</h1>
                    <div className='flex flex-wrap items-center justify-center mt-5'>
                        <img className='w-32 md:w-40 lg:w-48' src='/logos/organizaciones/INAIGEMBN.svg'/>
                    </div>
                    <h1 className='text-white font-bold mt-5 text-center mt-10'>Entidades asociadas peruanas</h1>
                    <div className='flex flex-wrap items-center justify-center mt-5 gap-10'>
                        <img className='w-16 md:w-20 lg:w-16' src='/logos/organizaciones/Logo-UNASAM.svg'/>
                        <img className='w-20 md:w-24 lg:w-20' src='/logos/organizaciones/Uni-logo_transparente_granate.svg'/>
                    </div>
                    <h1 className='text-white font-bold mt-5 text-center mt-10'>Entidades asociadas extranjeras</h1>
                    <div className='flex flex-wrap justify-center'>
                        <img className='w-32 md:w-40 lg:w-40' src='/logos/organizaciones/university-of-zurich-uzh-seeklogo.com.svg'/>
                        <img className='w-32 md:w-40 lg:w-36' src='/logos/organizaciones/university-of-huddersfield-logo.svg'/>
                        <img className='w-32 md:w-40 lg:w-40' src='/logos/organizaciones/Logo_USMB_web_grand_RVB.svg'/>
                    </div>
                </div>
            </div>
            <div className='flex-1 h-screen image-organizaciones hidden lg:block'></div>
        </div>
    );
}