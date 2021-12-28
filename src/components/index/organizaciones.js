import React from 'react';

export default function Organizaciones(){
    return(
        <div className='flex' id='organizaciones'>
            <div className='flex flex-1 justify-center items-center lg:h-screen py-10 lg:py-0 height-section' style={{backgroundColor:'#5b5b5f'}}>
                <div className='flex-1 w-full md:max-w-2xl lg:max-w-xl px-4 lg:px-0'>
                    <h1 className='text-white text-2xl lg:text-4xl font-bold'>Organizaciones</h1>
                    <div className='flex flex-wrap items-center justify-between mt-5 lg:mt-20'>
                        <img className='w-32 md:w-40 lg:w-48' src='/logos/organizaciones/INAIGEMBN.svg'/>
                        <img className='w-16 md:w-20 lg:w-20' src='/logos/organizaciones/Logo-UNASAM.svg'/>
                        <img className='w-20 md:w-24 lg:w-24' src='/logos/organizaciones/Uni-logo_transparente_granate.svg'/>
                    </div>
                    <div className='flex flex-wrap justify-between'>
                        <img className='w-32 md:w-40 lg:w-48' src='/logos/organizaciones/university-of-zurich-uzh-seeklogo.com.svg'/>
                        <img className='w-32 md:w-40 lg:w-40' src='/logos/organizaciones/university-of-huddersfield-logo.svg'/>
                        <img className='w-32 md:w-40 lg:w-48' src='/logos/organizaciones/Logo_USMB_web_grand_RVB.svg'/>
                    </div>
                </div>
            </div>
            <div className='flex-1 h-screen image-organizaciones hidden lg:block height-section'></div>
        </div>
    );
}