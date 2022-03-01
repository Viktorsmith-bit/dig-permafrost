import Link from 'next/link';
import { useState } from 'react';
import Eventos from './components/eventos';
import Articulos from './components/articulos';
import Tesis from './components/tesis';
import Patentes from './components/patentes';
import Footer from '../shared/footer/footer';

export default function Galeria(){ 
    const [state, setState] = useState({event: true, articulos:true, tesis:true, patentes:true});
    
    const eventos = (e)=>{e.preventDefault(), setState({event: true, articulos:true, tesis:true, patentes:true})}
    const articulos = (e)=>{e.preventDefault(); setState({event: false, articulos:false, tesis:true, patentes:true})}
    const tesis = (e)=>{e.preventDefault(); setState({event: false, articulos:true, tesis:false, patentes:true})}
    const patentes = (e)=>{e.preventDefault(); setState({event: false, articulos:true, tesis:true, patentes:false})}

    return(
        <div className=''>
            <div className='flex-1 lg:max-w-7xl mx-auto px-4 lg:px-0 py-16'>
                <Link href='/'>
                    <div className='flex items-center gap-1 cursor-pointer w-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <h1 className='text-base text-color'>Volver</h1>
                    </div> 
                </Link>         
                <h1 className='font-bold text-4xl lg:text-6xl mt-5 text-color'>PRODUCCIÓN CIENTÍFICA</h1>
            </div>
            <div className='flex justify-center items-center py-3 lg:py-0 lg:h-14 gray-color'>
                <div className='flex-1 w-full lg:max-w-7xl px-4 lg:px-0 '>
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex items-center gap-2'>
                            <div onClick={eventos} className={`h-4 w-4 cursor-pointer rounded-sm border-color ${state.event?'background-color':'bg-white'}`}></div>
                            <label onClick={eventos} className='flex items-center text-base lg:h-4 text-color cursor-pointer'>Eventos nacionales e internacionales</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div onClick={articulos} className={`h-4 w-4 cursor-pointer rounded-sm border-color ${!state.articulos?'background-color':'bg-white'}`}></div>
                            <label onClick={articulos} className='flex items-center text-base lg:h-4 text-color cursor-pointer'>Artículos científicos</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div onClick={tesis} className={`h-4 w-4 cursor-pointer rounded-sm border-color ${!state.tesis?'background-color':'bg-white'}`}></div>
                            <h1 onClick={tesis} className='flex items-center text-base lg:h-4 text-color cursor-pointer'>Tesis de pregrado y postgrado</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div onClick={patentes} className={`h-4 w-4 cursor-pointer rounded-sm border-color ${!state.patentes?'background-color':'bg-white'}`}></div>
                            <h1 onClick={patentes} className='flex items-center cursor-pointer text-base lg:h-4 text-color'>Patentes y derechos de autor</h1>
                        </div>
                    </div>
                </div>
            </div>
            <img className='h-48 lg:h-64 w-full cover border-b border-gray-300' src="/logos/perugrows/ProduccionCientifica_Proyectos_v4.png" />
            {state.event?<Eventos />:null}
            {state.articulos?null:<Articulos />}
            {state.tesis?null:<Tesis />}
            {state.patentes?null:<Patentes />}
            <Footer />
        </div>
    );
}