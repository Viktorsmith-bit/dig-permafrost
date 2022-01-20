import React, { Fragment } from 'react';
import { listaTilelayer } from '../listaTilelayer/listaTilelayer';

export default function ListCapas(props){

    return(
        <div className='absolute-tilelayer bg-white w-full md:w-96 lg:w-96 rounded-sm z-20 border border-gray-400 height-visor' style={{zIndex:"1000"}}>
            <div className='flex items-center justify-between gap-2 bg-green-700 px-4 h-10 rounded-t-sm'>
                <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="cursor-pointer bi bi-grid-fill" viewBox="0 0 16 16">
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                    </svg>
                    <h1 className='text-white text-base'>Galería de mapas base</h1>
                </div>
                <Close handleClickClose={props.handleClickClose} />
            </div>
            <div className='overFlow-hidden h-96'>
                <div className='overflow-auto overscroll-auto h-96 py-4 px-4'>
                    <h1 className='ml-0.5 border-b-2 border-gray-600 pb-1 text-color'>Mapas</h1>
                    <div className='flex flex-wrap justify-center w-full gap-3 mt-3'>
                        {
                            listaTilelayer.map((e)=>{
                                return <div>
                                    <img id={e.id} onClick={props.openMap} className='w-40 h-36 cover cursor-pointer' src={`/mapas/${e.imagen}`} />
                                    <h1 className='w-40 text-sm text-color text-center mt-1'>{e.nombre}</h1>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

function Close(props){
    return(
        <Fragment>
            <svg onClick={props.handleClickClose} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="-mr-2 cursor-pointer bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </Fragment>
    );
}