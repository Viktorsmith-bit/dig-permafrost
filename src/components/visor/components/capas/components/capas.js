import React from 'react';
import { useState } from 'react';

export default function ListCapas(props){
    const[amb, setAmb] =useState(false);
    const[per, setPer] =useState(false);
    const[nev, setNev] =useState(false);

    const hundleOpenAmbito = (e)=>{e.preventDefault(), setAmb(true)}
    const hundleCloseAmbito = (e)=>{e.preventDefault(), setAmb(false)}
    const openPermafrost = (e)=>{e.preventDefault(), setPer(true)}
    const closePermafrost = (e)=>{e.preventDefault(), setPer(false)}
    const openNieve = (e)=>{e.preventDefault(), setNev(true)}
    const closeNieve = (e)=>{e.preventDefault(), setNev(false)}

    return(
        <div className='absolute-capas bg-white w-full md:w-96 lg:w-96 rounded-sm border border-gray-400 height-visor ' style={{zIndex:"1000"}}>
            <div className='flex items-center gap-2 bg-green-700 px-4 h-10 rounded-t-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-stack" viewBox="0 0 16 16">
                    <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                    <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                </svg>
                <h1 className='text-white text-base'>Lista de capas</h1>
            </div>
            <div className='overFlow-hidden h-96'>
                <div className='overflow-auto overscroll-auto h-96 py-3 px-4'>
                    <h1 className='text-base text-color border-b-2 border-gray-600 pb-1'>Capas</h1>
                    <div className='flex py-2'>
                        <div className='flex items-center'>
                            {props.cor?<div className='flex gap-2'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm mt-0.5'/><h1 onClick={props.hundleClickCloseCor} className='text-sm cursor-pointer text-color'>Límites de cordilleras glaciares del Perú</h1></div>:
                            <div className='flex gap-2'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm mt-0.5'/><h1 onClick={props.hundleClickOpenCor} className='text-sm cursor-pointer text-color'>Límites de cordilleras glaciares del Perú</h1></div>}
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
                                {props.estado?<div className='flex gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm mt-0.5'/><h1 onClick={props.hundleClickClose} className='text-sm cursor-pointer text-color'>Unidades hidrográficas de cordillera Blanca</h1></div>:
                                <div className='flex gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm mt-0.5'/><h1 onClick={props.hundleClickOpen} className='text-sm cursor-pointer text-color'>Unidades hidrográficas de cordillera Blanca</h1></div>}
                                {props.corchila?<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseChila} className='text-sm cursor-pointer text-color'>Unidad hidrográfica de cordillera Chila</h1></div>:
                                <div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenChila} className='text-sm cursor-pointer text-color'>Unidad hidrográfica de cordillera Chila</h1></div>}
                            </div>
                        }
                    </div>
                    <div className='flex pt-2'>
                        {props.inv?<div className='flex gap-2'>
                                <div className='flex gap-2'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm mt-0.5'/><h1 onClick={props.hundleClickCloseInv} className='text-sm cursor-pointer text-color'>Inventario nacional de glaciares rocosos del Perú</h1></div>
                            </div>:<div className='flex gap-2'>
                                <div className='flex gap-2'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm mt-0.5'/><h1 onClick={props.hundleClickOpenInv} className='text-sm cursor-pointer text-color'>Inventario nacional de glaciares rocosos del Perú</h1></div>
                            </div>
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
                        {
                            !per?null:<div className='px-6 mt-2'>
                                {props.per30?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickClosePer30} className='text-sm cursor-pointer text-color'>Modelo de permafrost a 30 metros</h1></div>:
                                <div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenPer30} className='text-sm cursor-pointer text-color'>Modelo de permafrost a 30 metros</h1></div>}
                                {props.per90?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickClosePer90} className='text-sm cursor-pointer text-color'>Modelo de permafrost a 90 metros</h1></div>:
                                <div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenPer90} className='text-sm cursor-pointer text-color'>Modelo de permafrost a 90 metros</h1></div>}
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
                                {props.scp2002?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2002} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2002</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2002} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2002</h1></div>}
                                {props.scp2003?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2003} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2003</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2003} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2003</h1></div>}
                                {props.scp2004?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2004} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2004</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2004} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2004</h1></div>}
                                {props.scp2005?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2005} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2005</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2005} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2005</h1></div>}
                                {props.scp2006?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2006} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2006</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2006} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2006</h1></div>}
                                {props.scp2007?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2007} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2007</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2007} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2007</h1></div>}
                                {props.scp2008?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2008} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2008</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2008} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2008</h1></div>}
                                {props.scp2009?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2009} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2009</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2009} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2009</h1></div>}
                                {props.scp2010?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2010} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2010</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2010} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2010</h1></div>}
                                {props.scp2011?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2011} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2011</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2011} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2011</h1></div>}
                                {props.scp2012?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2012} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2012</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2012} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2012</h1></div>}
                                {props.scp2014?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2014} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2014</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2014} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2014</h1></div>}
                                {props.scp2015?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2015} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2015</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2015} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2015</h1></div>}
                                {props.scp2013?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2013} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2013</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2013} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2013</h1></div>}
                                {props.scp2016?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2016} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2016</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2016} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2016</h1></div>}
                                {props.scp2017?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2017} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2017</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2017} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2017</h1></div>}
                                {props.scp2018?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2018} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2018</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2018} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2018</h1></div>}
                                {props.scp2019?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2019} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2019</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2019} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2019</h1></div>}
                                {props.scp2020?<div className='flex items-center gap-1'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickCloseScp2020} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2020</h1></div>:<div className='flex items-center gap-1'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenScp2020} className='text-sm cursor-pointer text-color'>Persistencia de nieve año 2020</h1></div>}
                            </div>
                        }
                    </div>
                    <div className='flex gap-2 py-2'>
                        <div className='flex items-center gap-2'>
                            {!props.panam?<div className='flex items-center gap-2'><input type="checkbox" checked={true} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickClosePanam} className='text-sm cursor-pointer text-color'>Fotografías panorámicas</h1></div>:
                            <div className='flex items-center gap-2'><input type="checkbox" checked={false} className='h-4 w-4 rounded-sm'/><h1 onClick={props.hundleClickOpenPanam} className='text-sm cursor-pointer text-color'>Fotografías panorámicas</h1></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}