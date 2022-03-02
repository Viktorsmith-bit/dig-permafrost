import React from 'react';

export default function Creditos(){
    return(
        <div className='flex absolute bottom-0 left-0 z-20' style={{zIndex:"1000"}}>
            <div className='flex flex-wrap items-center gap-3 pl-3 py-1 bg-white'>
                <a href='http://portal.concytec.gob.pe/index.php' target='_blank'><img className='h-7 cursor-pointer' src='/logos/perugrows/Concytec.PNG'/></a>
                <a href='https://prociencia.gob.pe/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/perugrows/ProCiencia.jpg'/></a>
                <a href='https://www.bancomundial.org/es/home' target='_blank'><img className='h-7 cursor-pointer' src='/logos/perugrows/Logo-BancoMundial.png'/></a>
            </div>
            <div className='flex flex-wrap items-center gap-4 py-1 px-3 bg-white rounded-r-sm'>
                <a href='http://www.unasam.edu.pe/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/UNASAM_Logo.png'/></a>
                <a href='https://www.uni.edu.pe/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/UNI_Logo_Sf.png'/></a>
                <a href='https://www.hud.ac.uk/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/UniversidadHuddersfield_Logo_Sf.png'/></a>
                <a href='https://www.uzh.ch/en.html' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/UniversidadZurich_logo.png'/></a>    
                <a href='https://www.univ-smb.fr/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/University_of_Savoy_Logo.png'/></a>   
                <img className='h-7' src='/logos/visor/IICMLogo_Sf.png'/>  
                <img className='h-7' src='/logos/visor/CCSHLogo_Sf.png'/>  
            </div>
        </div>
    );
}