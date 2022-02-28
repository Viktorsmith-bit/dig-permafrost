import Link from 'next/link';
import React from 'react';

export default function navMobile(){
    return(
        <div className='w-full px-4 lg:px-10 py-4 background' >
            <Link href='/'><a href='#proyecto'><h1 className='text-white cursor-pointer text-2xl'>PERMAFROST</h1></a></Link>
            <Link href="/" ><a><h1 className='text-white cursor-pointer mt-3'>Inicio</h1></a></Link>
            <Link href="/equipo-cientifico/integrantes"><a><h1 className='text-white cursor-pointer'>Equipo científico</h1></a></Link>
            <Link href="/produccion/cientifica"><a><h1 className='text-white cursor-pointer'>Producción científica</h1></a></Link>
            <Link href="/galeria"><a><h1 className='text-white cursor-pointer'>Galería</h1></a></Link>
            <Link href="/visor/mapa"><a><h1 className='text-white cursor-pointer'>Visor de mapas</h1></a></Link>
            <a href='#contacto'><h1 className='text-white cursor-pointer'>Contacto</h1></a>
        </div>
    );
}