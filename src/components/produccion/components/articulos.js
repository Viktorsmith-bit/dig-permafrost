import { listaArticulos } from "../lista/lista";
import React from 'react';

export default function Produccion(){
    return(
        <div className='flex justify-center'>
            <div className='flex-1 max-w-7xl py-12 px-4 lg:px-0'>
                <div className='flex flex-wrap justify-start gap-2 lg:gap-4'>
                    {
                        listaArticulos.map((item)=>{
                            return <div key={item.id} className='flex flex-col justify-between border-color rounded-md width-perfil p-4'>
                                            <div className='container'>
                                                <h1 className='text-sm lg:text-base text-color font-bold'>{item.titulo}</h1>
                                                <h1 className='text-sm text-gray-700 text-color '>{item.tipo}</h1>
                                            </div>
                                <div className='mt-5'>
                                    <h1 className='text-sm text-gray-700 text-color'><span className="font-bold">Revista:</span> {item.revista}</h1>
                                    <h1 className='text-sm text-gray-700 text-color mt-1'><span className="font-bold">Autores:</span> {item.autores}</h1>
                                    <h1 className='text-sm text-gray-700 text-color mt-1'><span className="font-bold">DOI:</span> {item.doi}</h1>
                                    <a href={item.link} target="_blank"><h1 className={`text-sm text-gray-700 text-color mt-1 ${item.link === null?"hidden":"block"}`}><span className="font-bold">Enlace:</span> <span className='green-color font-bold'>Ver publicación</span></h1></a>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}