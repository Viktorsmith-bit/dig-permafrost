import React from 'react';

export default function ListCapas(props){

    return(
        <div className='absolute-leyenda bg-white w-full md:w-96 lg:w-96 rounded-sm z-20 border border-gray-400 height-visor' style={{zIndex:"1000"}}>
            <div className='flex items-center gap-2 bg-green-700 px-4 h-10 rounded-t-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="cursor-pointer bi bi-card-list" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
                <h1 className='text-white text-base'>Leyenda</h1>
            </div>
            <div className='overFlow-hidden h-96'>
                <div className='overflow-auto overscroll-auto h-96'>
                    <div className='px-4 py-2'>
                        <h1 className='text-sm'>Cordilleras glaciares del Perú</h1>
                        <div className='flex items-center gap-2 px-4 mt-2'>
                            <div className='h-4 w-4 bg-gray-900 rounded-sm'></div>
                            <h1 className='text-sm'>Límites de las cordilleras</h1>
                        </div>
                    </div>
                    <div className='px-4 py-2'>
                        <h1 className='text-sm'>Ámbitos de intervención</h1>
                        <div className='px-4 mt-2'>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 bg-blue-300 rounded-sm'></div>
                                <h1 className='text-sm'>Unidades hidrográficas de cordillera Blanca</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 bg-yellow-400 rounded-sm'></div>
                                <h1 className='text-sm'>Unidad hidrográfica de cordillera Chila</h1>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 py-2'>
                        <h1 className='text-sm'>Inventario nacional de glaciares rocosos del Péru</h1>
                        <div className='px-4 mt-2'>
                            <h1 className='text-sm'>Actividad</h1>
                            <div className='flex items-center gap-2 mt-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#124b89"}}></div>
                                <h1 className='text-sm'>Activo</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#6e00f5"}} ></div>
                                <h1 className='text-sm'>Inactivo</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#03B2F1"}}></div>
                                <h1 className='text-sm'>Intacto</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#999999"}}></div>
                                <h1 className='text-sm'>Relicto</h1>
                            </div>
                        </div>
                    </div>
                    {/*PERMAFROST**/}
                    <div className='px-4 py-2'>
                        <h1 className='text-sm'>Modelo probabilístico de presencia de permafrost</h1>
                        <div className='px-4 mt-2'>
                            <h1 className='text-sm'>Probabilidad</h1>
                            <div className='flex items-center gap-2 mt-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#FFCE03"}} ></div>
                                <h1 className='text-sm'>0.5-0.7</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#FD6104"}} ></div>
                                <h1 className='text-sm'>0.7-0.9</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#F00505"}}></div>
                                <h1 className='text-sm'>0.9-1.0</h1>
                            </div>
                        </div>
                    </div>
                    
                    {/*NIEVE**/}
                    <div className='px-4 py-2'>
                        <h1 className='text-sm'>Modelo de persistencia de nieve</h1>
                        <div className='px-4 mt-2'>
                            <h1 className='text-sm'>Rangos (días/año)</h1>
                            <div className='flex items-center gap-2 mt-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#d6d6ff"}} ></div>
                                <h1 className='text-sm'>10-81</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#8f97e3"}} ></div>
                                <h1 className='text-sm'>81-152</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#556cc9"}}></div>
                                <h1 className='text-sm'>152-223</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#244ead"}}></div>
                                <h1 className='text-sm rounded-sm'>223-294</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#003994"}}></div>
                                <h1 className='text-sm'>294-365</h1>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 py-2'>
                        <h1 className='text-sm'>Fotografías panorámicas</h1>
                        <div className='px-3 mt-2'>
                            <div className='flex items-end gap-1'>
                                <img className='h-6 w-6' src='/location.png' />
                                <h1 className='text-sm'>Fotografías 360</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}