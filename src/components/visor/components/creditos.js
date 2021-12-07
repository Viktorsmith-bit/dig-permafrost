import React from 'react';

export default function Creditos(){
    return(
        <div className='flex justify-center absolute bottom-0 left-0 z-20 bg-white gap-2 px-2 py-1 rounded-r-sm width-creditos'>
            <a href='http://portal.concytec.gob.pe/index.php' target='_blank'><img className='h-10 cursor-pointer' src='/logos/perugrows/Concytec.png'/></a>
            <a href='http://portal.concytec.gob.pe/index.php' target='_blank'><img className='h-10 cursor-pointer' src='/logos/perugrows/ProCiencia.jpg'/></a>
            <a href='https://www.bancomundial.org/es/home' target='_blank'><img className='h-10 cursor-pointer' src='/logos/perugrows/Logo-BancoMundial.png'/></a>
        </div>
    );
}