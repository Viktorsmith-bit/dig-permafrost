import React, { useState } from 'react';
import Link from 'next/link';
import NavMobileIndex from './components/nav.mobile.index';

export default function Nav(){
    const [state, setState] = useState(false);

    const open = (e)=>{
        e.preventDefault(), setState(true)
    }
    const close = (e)=>{
        e.preventDefault(), setState(false)
    }

    return(
        <nav className='h-20 lg:h-20 background-color' id='inicio'>
            <nav className='fixed h-20 w-full lg:hidden z-30 background-color'>
                <div className='flex items-center justify-between h-20 px-4 lg:px-10 border-b border-gray-700' >
                    {
                        !state ? <svg onClick={open} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>: <svg onClick={close} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    }
                    <img className='w-40' src='/logos/INAIGEM.svg' />
                </div>
                { !state ? null: <NavMobileIndex />} 
            </nav>
            <nav className='fixed h-20 flex justify-between items-center px-10 w-full hidden lg:flex z-30 background-color' >
                <Link href='/'>
                    <a>
                        <h1 className='text-white cursor-pointer text-2xl font-bold'>PERMAFROST</h1>
                    </a>
                </Link>
                <div className='flex gap-7'>
                    <Link href="/" ><a><h1 className='text-white cursor-pointer border-b-2 border-transparent hover:border-white'>Inicio</h1></a></Link>
                    <Link href="/equipo-cientifico/integrantes"><a><h1 className='text-white cursor-pointer border-b-2 border-transparent hover:border-white'>Equipo científico</h1></a></Link>
                    <Link href="/produccion/cientifica"><a><h1 className='text-white cursor-pointer border-b-2 border-transparent hover:border-white'>Producción científica</h1></a></Link>
                    <Link href="/galeria"><a><h1 className='text-white cursor-pointer border-b-2 border-transparent hover:border-white'>Galería</h1></a></Link>
                    <Link href="/visor/mapa"><a><h1 className='text-white cursor-pointer border-b-2 border-transparent hover:border-white'>Visor de mapas</h1></a></Link>
                    <a href='#contacto'><h1 className='text-white cursor-pointer border-b-2 border-transparent hover:border-white'>Contacto</h1></a>
                </div> 
                <img className='w-40' src='/logos/INAIGEM.svg' />
            </nav>
        </nav>
    );
}