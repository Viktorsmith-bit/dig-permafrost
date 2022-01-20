import React, { Fragment } from 'react';
import { useState } from 'react';

export default function ListCapas(props){
    const[amb, setAmb] = useState(false);
    const[per, setPer] = useState(false);
    const[nev, setNev] = useState(false);
    const[per30, setPer30] = useState(true);
    const[per90, setPer90] = useState(true);

    const hundleOpenAmbito = (e)=>{e.preventDefault(), setAmb(true)}
    const hundleCloseAmbito = (e)=>{e.preventDefault(), setAmb(false)}
    const openPermafrost = (e)=>{e.preventDefault(), setPer(true)}
    const closePermafrost = (e)=>{e.preventDefault(), setPer(false)}
    const openNieve = (e)=>{e.preventDefault(), setNev(true)}
    const closeNieve = (e)=>{e.preventDefault(), setNev(false)}
    const openPermafrost30 = (e)=>{e.preventDefault(), setPer30(false)}
    const closePermafrost30 = (e)=>{e.preventDefault(), setPer30(true)}
    const openPermafrost90 = (e)=>{e.preventDefault(), setPer90(false)}
    const closePermafrost90 = (e)=>{e.preventDefault(), setPer90(true)}

    return(
        <div className='absolute-capas bg-white w-full md:w-96 lg:w-96 rounded-sm border border-gray-400 height-visor ' style={{zIndex:"1000"}}>
            <div className='flex items-center justify-between bg-green-700 px-4 h-10 rounded-t-sm'>
                <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-stack" viewBox="0 0 16 16">
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                    </svg>
                    <h1 className='text-white text-base'>Lista de capas</h1>
                </div>
                <Close handleClickClose={props.handleClickClose} />
            </div>
            <div className='overFlow-hidden h-96'>
                <div className='overflow-auto overscroll-auto h-96 py-3 px-4'>
                    <h1 className='text-base text-color border-b-2 border-gray-600 pb-1'>Capas</h1>
                    <div className='flex py-2'>
                        <div className='flex items-center'>
                            {props.cor === "openCor"?<div className='flex items-center gap-2'><InputOpen/><h1 id="closeCor" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Límites de cordilleras glaciares del Perú</h1></div>:
                            <div className='flex items-center gap-2'><InputClose/><h1 id="openCor" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Límites de cordilleras glaciares del Perú</h1></div>}  
                        </div>
                    </div>
                    <div className='box'>
                        {!amb?<div className='flex items-center gap-2'>
                                <svg onClick={hundleOpenAmbito} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer -ml-1 bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg>
                                <h1 className='text-sm text-color cursor-pointer' onClick={hundleOpenAmbito}>Ámbitos de intervención</h1>
                            </div>:<div className='flex items-center gap-2'>
                                <svg onClick={hundleCloseAmbito} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer -ml-1 bi bi-caret-down" viewBox="0 0 16 16">
                                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                </svg>
                                <h1 className='text-sm text-color cursor-pointer' onClick={hundleCloseAmbito}>Ámbitos de intervención</h1>
                            </div>
                        }
                        {
                            !amb?null:<div className='px-6 mt-2'>
                                {props.corPeru === "openCorPeru"?<div className='flex gap-1'><InputOpen/><h1 id="closeCorPeru" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordilleras de intervención</h1></div>:
                                <div className='flex gap-1'><InputClose/><h1 id="openCorPeru" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordilleras de intervención</h1></div>}
                                {props.corBlanca === "openCorBlanca"?<div className='flex gap-1'><InputOpen/><h1 id="closeCorBlanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Unidades hidrográficas de cordillera Blanca</h1></div>:
                                <div className='flex gap-1'><InputClose/><h1 id="openCorBlanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Unidades hidrográficas de cordillera Blanca</h1></div>}
                                {props.corChila === "openCorChila"?<div className='flex items-center gap-1'><InputOpen/><h1 id="closeCorChila" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Unidad hidrográfica de cordillera Chila</h1></div>:
                                <div className='flex items-center gap-1'><InputClose /><h1 id="openCorChila" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Unidad hidrográfica de cordillera Chila</h1></div>}
                                {props.puntosTrabajo === "closePuntosTrabajo"?<div className='flex items-center gap-1'><InputClose/><h1 id="openPuntosTrabajo" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Puntos de trabajo</h1></div>:
                                <div className='flex items-center gap-1'><InputOpen /><h1 id="closePuntosTrabajo" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Puntos de trabajo</h1></div>}
                            </div>
                        }
                    </div>
                    <div className='flex pt-2'>
                        {props.inv === "closeInv"?<div className='flex gap-2'><InputClose/><h1 id="openInv" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Inventario nacional de glaciares rocosos del Perú</h1></div>:
                         <div className='flex gap-2'><InputOpen/><h1 id="closeInv" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Inventario nacional de glaciares rocosos del Perú</h1></div>
                        }
                    </div>
                    {/*PERMAFROST**/}
                    <div className='py-2'>
                        {!per?<div className='flex gap-2'>
                                <svg onClick={openPermafrost} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer -ml-1 bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg>
                                <h1 className='text-sm text-color cursor-pointer' onClick={openPermafrost}>Modelo probabilístico de presencia de permafrost</h1>
                            </div>:<div className='flex gap-2'>
                                <svg onClick={closePermafrost} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer -ml-1 bi bi-caret-down" viewBox="0 0 16 16">
                                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                </svg>
                                <h1 className='text-sm text-color cursor-pointer' onClick={closePermafrost}>Modelo probabilístico de presencia de permafrost</h1>
                            </div>
                        }
                        {!per?null:<div className='px-6 mt-2'>
                                {per30?<div className='flex gap-1'>
                                        <svg onClick={openPermafrost30} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer -ml-1 bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                        </svg>
                                        <h1 className='text-sm text-color cursor-pointer' onClick={openPermafrost30}>Presencia de permafrost a 30 metros</h1>
                                    </div>:<div className='flex gap-1'>
                                        <svg onClick={closePermafrost30} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer -ml-1 bi bi-caret-down" viewBox="0 0 16 16">
                                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                        </svg>
                                        <h1 className='text-sm text-color cursor-pointer' onClick={closePermafrost30}>Presencia de permafrost a 30 metros</h1>
                                    </div>
                                }
                                {per30?null:<div className='px-5 ml-0.5 pb-3'>
                                        {props.per30Ampato === "closePer30Ampato"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Ampato" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Ampato</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Ampato" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Ampato</h1></div>}
                                        {props.per30Apolobamba === "closePer30Apolobamba"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Apolobamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Apolobamba</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Apolobamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Apolobamba</h1></div>}
                                        {props.per30Barroso === "closePer30Barroso"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Barroso" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Barroso</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Barroso" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Barroso</h1></div>}
                                        {props.per30Blanca === "closePer30Blanca"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Blanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Blanca</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Blanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Blanca</h1></div>}
                                        {props.per30Carabaya === "closePer30Carabaya"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Carabaya" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Carabaya</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Carabaya" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Carabaya</h1></div>}
                                        {props.per30Central === "closePer30Central"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Central" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Central</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Central" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Central</h1></div>}
                                        {props.per30Chila === "closePer30Chila"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Chila" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Chila</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Chila" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Chila</h1></div>}
                                        {props.per30Chonta === "closePer30Chonta"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Chonta" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Chonta</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Chonta" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Chonta</h1></div>}
                                        {props.per30Huagoruncho === "closePer30Huagoruncho"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Huagoruncho" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huagoruncho</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Huagoruncho" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huagoruncho</h1></div>}
                                        {props.per30Huallanca === "closePer30Huallanca"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Huallanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huallanca</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Huallanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huallanca</h1></div>}
                                        {props.per30Huanzo === "closePer30Huanzo"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Huanzo" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huanzo</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Huanzo" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huanzo</h1></div>}
                                        {props.per30Huayhuash === "closePer30Huayhuash"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Huayhuash" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huayhuash</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Huayhuash" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huayhuash</h1></div>}
                                        {props.per30Huaytapallana === "closePer30Huaytapallana"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Huaytapallana" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huaytapallana</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Huaytapallana" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huaytapallana</h1></div>}
                                        {props.per30LaRaya === "closePer30LaRaya"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30LaRaya" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera La Raya</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30LaRaya" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera La Raya</h1></div>}
                                        {props.per30LaViuda === "closePer30LaViuda"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30LaViuda" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera La Viuda</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30LaViuda" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera La Viuda</h1></div>}
                                        {props.per30Otros === "closePer30Otros"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Otros" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Otros</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Otros" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Otros</h1></div>}
                                        {props.per30Raura === "closePer30Raura"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Raura" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Raura</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Raura" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Raura</h1></div>}
                                        {props.per30Urubamba === "closePer30Urubamba"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Urubamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Urubamba</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Urubamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Urubamba</h1></div>}
                                        {props.per30Vilcabamba === "closePer30Vilcabamba"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Vilcabamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Vilcabamba</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Vilcabamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Vilcabamba</h1></div>}
                                        {props.per30Vilcanota === "closePer30Vilcanota"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Vilcanota" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Vilcanota</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Vilcanota" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Vilcanota</h1></div>}
                                        {props.per30Volcanica === "closePer30Volcanica"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer30Volcanica" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Volcánica</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer30Volcanica" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Volcánica</h1></div>}
                                    </div>
                                }
                                {per90?<div className='flex gap-1'>
                                        <svg onClick={openPermafrost90} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer -ml-1 bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                        </svg>
                                        <h1 className='text-sm text-color cursor-pointer' onClick={openPermafrost90}>Presencia de permafrost a 90 metros</h1>
                                    </div>:<div className='flex gap-1'>
                                        <svg onClick={closePermafrost90} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer -ml-1 bi bi-caret-down" viewBox="0 0 16 16">
                                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                        </svg>
                                        <h1 className='text-sm text-color cursor-pointer' onClick={closePermafrost90}>Presencia de permafrost a 90 metros</h1>
                                    </div>
                                }
                                {per90?null:<div className='px-5 ml-0.5'>
                                        {props.per90Ampato === "closePer90Ampato"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Ampato" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Ampato</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Ampato" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Ampato</h1></div>}
                                        {props.per90Apolobamba === "closePer90Apolobamba"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Apolobamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Apolobamba</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Apolobamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Apolobamba</h1></div>}
                                        {props.per90Barroso === "closePer90Barroso"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Barroso" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Barroso</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Barroso" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Barroso</h1></div>}
                                        {props.per90Blanca === "closePer90Blanca"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Blanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Blanca</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Blanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Blanca</h1></div>}
                                        {props.per90Carabaya === "closePer90Carabaya"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Carabaya" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Carabaya</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Carabaya" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Carabaya</h1></div>}
                                        {props.per90Central === "closePer90Central"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Central" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Central</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Central" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Central</h1></div>}
                                        {props.per90Chila === "closePer90Chila"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Chila" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Chila</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Chila" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Chila</h1></div>}
                                        {props.per90Chonta === "closePer90Chonta"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Chonta" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Chonta</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Chonta" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Chonta</h1></div>}
                                        {props.per90Huagoruncho === "closePer90Huagoruncho"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Huagoruncho" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huagoruncho</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Huagoruncho" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huagoruncho</h1></div>}
                                        {props.per90Huallanca === "closePer90Huallanca"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Huallanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huallanca</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Huallanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huallanca</h1></div>}
                                        {props.per90Huanzo === "closePer90Huanzo"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Huanzo" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huanzo</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Huanzo" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huanzo</h1></div>}
                                        {props.per90Huayhuash === "closePer90Huayhuash"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Huayhuash" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huayhuash</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Huayhuash" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huayhuash</h1></div>}
                                        {props.per90Huaytapallana === "closePer90Huaytapallana"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Huaytapallana" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huaytapallana</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Huaytapallana" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Huaytapallana</h1></div>}
                                        {props.per90LaRaya === "closePer90LaRaya"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90LaRaya" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera La Raya</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90LaRaya" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera La Raya</h1></div>}
                                        {props.per90LaViuda === "closePer90LaViuda"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90LaViuda" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera La Viuda</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90LaViuda" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera La Viuda</h1></div>}
                                        {props.per90Otros === "closePer90Otros"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Otros" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Otros</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Otros" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Otros</h1></div>}
                                        {props.per90Raura === "closePer90Raura"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Raura" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Raura</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Raura" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Raura</h1></div>}
                                        {props.per90Urubamba === "closePer90Urubamba"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Urubamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Urubamba</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Urubamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Urubamba</h1></div>}
                                        {props.per90Vilcabamba === "closePer90Vilcabamba"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Vilcabamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Vilcabamba</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Vilcabamba" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Vilcabamba</h1></div>}
                                        {props.per90Vilcanota === "closePer90Vilcanota"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Vilcanota" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Vilcanota</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Vilcanota" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Vilcanota</h1></div>}
                                        {props.per90Volcanica === "closePer90Volcanica"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPer90Volcanica" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Volcánica</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closePer90Volcanica" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cordillera Volcánica</h1></div>}
                                    </div>
                                }
                            </div>
                        }
                    </div>
                    {/*NIEVE**/}
                    <div className='box'>
                        {!nev?<div className='flex items-center gap-2'>
                                <svg onClick={openNieve} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer -ml-1 bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg>
                                <h1 className='text-sm text-color cursor-pointer' onClick={openNieve}>Modelo de persistencia de Nieve</h1>
                            </div>:<div className='flex items-center gap-2'>
                                <svg onClick={closeNieve} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer -ml-1 bi bi-caret-down" viewBox="0 0 16 16">
                                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                </svg>
                                <h1 className='text-sm text-color cursor-pointer' onClick={closeNieve}>Modelo de persistencia de Nieve</h1>
                            </div>
                        }
                        {
                            !nev?null:<div className='px-6 mt-2'>
                                {props.scp2002 === "closeScp2002"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2002" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2002</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2002" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2002</h1></div>}
                                {props.scp2003 === "closeScp2003"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2003" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2003</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2003" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2003</h1></div>}
                                {props.scp2004 === "closeScp2004"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2004" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2004</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2004" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2004</h1></div>}
                                {props.scp2005 === "closeScp2005"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2005" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2005</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2005" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2005</h1></div>}
                                {props.scp2006 === "closeScp2006"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2006" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2006</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2006" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2006</h1></div>}
                                {props.scp2007 === "closeScp2007"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2007" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2007</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2007" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2007</h1></div>}
                                {props.scp2008 === "closeScp2008"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2008" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2008</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2008" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2008</h1></div>}
                                {props.scp2009 === "closeScp2009"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2009" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2009</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2009" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2009</h1></div>}
                                {props.scp2010 === "closeScp2010"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2010" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2010</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2010" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2010</h1></div>}
                                {props.scp2011 === "closeScp2011"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2011" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2011</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2011" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2011</h1></div>}
                                {props.scp2012 === "closeScp2012"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2012" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2012</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2012" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2012</h1></div>}
                                {props.scp2013 === "closeScp2013"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2013" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2013</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2013" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2013</h1></div>}
                                {props.scp2014 === "closeScp2014"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2014" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2014</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2014" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2014</h1></div>}
                                {props.scp2015 === "closeScp2015"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2015" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2015</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2015" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2015</h1></div>}
                                {props.scp2016 === "closeScp2016"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2016" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2016</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2016" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2016</h1></div>}
                                {props.scp2017 === "closeScp2017"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2017" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2017</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2017" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2017</h1></div>}
                                {props.scp2018 === "closeScp2018"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2018" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2018</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2018" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2018</h1></div>}
                                {props.scp2019 === "closeScp2019"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2019" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2019</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2019" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2019</h1></div>}
                                {props.scp2020 === "closeScp2020"?<div className='flex items-center gap-1'><InputClose /><h1 id="openScp2020" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2020</h1></div>:<div className='flex items-center gap-1'><InputOpen /><h1 id="closeScp2020" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2020</h1></div>}
                            </div>
                        }
                    </div>
                    <div className='flex gap-2 py-2'>
                        <div className='flex items-center gap-2'>
                            {props.foto360 === "close360" ?<div className='flex items-center gap-2'><InputClose /><h1 id="open360" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Fotografías panorámicas</h1></div>:
                            <div className='flex items-center gap-2'><InputOpen /><h1 id="close360" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Fotografías panorámicas</h1></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

function InputClose(){
    return(
        <Fragment>
            <input type="checkbox" checked={false} className='h-4 w-4 rounded-sm mt-0.5'/>
        </Fragment>
    );  
}

function InputOpen(){
    return(
        <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#047857" className="mt-0.5 bi bi-check-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
            </svg>
        </Fragment>
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