import React from 'react';
import { useState } from 'react';
import Capas from './components/capas';
import Leyenda from './components/leyenda';
import Tilelayer from './components/tilelayer';

export default function Aside(props){
    const [state, setState] = useState({capas:true, leyenda:false, tilelayer:false})

    const handleClickOpen = (e)=>{e.preventDefault(), setState({capas:true})}
    const handleClickClose = (e)=>{e.preventDefault(), setState({capas:false})}
    const handleClickOpenLey = (e)=>{e.preventDefault(), setState({leyenda:true})}
    const handleClickCloseLey = (e)=>{e.preventDefault(), setState({leyenda:false})}
    const handleClickOpenTil = (e)=>{e.preventDefault(), setState({tilelayer:true})}
    const handleClickCloseTil = (e)=>{e.preventDefault(), setState({tilelayer:false})}

    return(
        <div className='capas'>
            {
                state.capas?<div onClick={handleClickClose} style={{zIndex:"1000"}} className='flex items-center justify-center w-10 h-10 absolute z-20 top-3 right-3 rounded-sm bg-white cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="325" fill="#434040" className="bi bi-stack" viewBox="0 0 16 16">
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                    </svg>
                </div>:<div onClick={handleClickOpen} style={{zIndex:"1000"}} className='flex items-center justify-center w-10 h-10 absolute z-20 top-3 right-3 rounded-sm bg-white cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#434040" className="bi bi-stack" viewBox="0 0 16 16">
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                    </svg>
                </div>
            }
            {
                !state.leyenda?<div onClick={handleClickOpenLey} style={{zIndex:"1000"}} className='flex items-center justify-center w-10 h-10 rounded-sm bg-white absolute z-20 top-14 right-3 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#434040" className="cursor-pointer bi bi-card-list" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                    </svg>
                </div>:<div onClick={handleClickCloseLey} style={{zIndex:"1000"}} className='flex items-center justify-center w-10 h-10 rounded-sm bg-white absolute z-20 top-14 right-3 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#434040" className="cursor-pointer bi bi-card-list" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                    </svg>
                </div>
            }
            {
                !state.tilelayer?<div onClick={handleClickOpenTil} className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-sm bg-white absolute z-20 top-24 right-3 mt-1' style={{zIndex:"1000"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#434040" className="cursor-pointer bi bi-grid-fill" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                </svg>
                </div>:<div onClick={handleClickCloseTil}  className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-sm bg-white absolute z-20 top-24 right-3 mt-1' style={{zIndex:"1000"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#434040" className="cursor-pointer bi bi-grid-fill" viewBox="0 0 16 16">
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                    </svg>
                </div>
            }
             
            {state.capas?<Capas 
                cor={props.cor} corBlanca={props.corBlanca} corChila={props.corChila} 
                foto360={props.foto360} inv={props.inv} corPeru={props.corPeru} puntosTrabajo={props.puntosTrabajo}
                hundleClickEstadoVisor={props.hundleClickEstadoVisor}
                hundleClickClosePanam={props.hundleClickClosePanam} hundleClickOpenPanam={props.hundleClickOpenPanam} panam={props.panam}
                hundleClickOpen={props.hundleClickOpen} hundleClickClose={props.hundleClickClose} estado={props.estado} 
                scp2002={props.scp2002} scp2003={props.scp2003} scp2004={props.scp2004} scp2005={props.scp2005} scp2006={props.scp2006} scp2007={props.scp2007}
                scp2008={props.scp2008} scp2009={props.scp2009} scp2010={props.scp2010} scp2011={props.scp2011} scp2012={props.scp2012} scp2013={props.scp2013}
                scp2014={props.scp2014} scp2015={props.scp2015} scp2016={props.scp2016} scp2017={props.scp2017} scp2018={props.scp2018} scp2019={props.scp2019}
                scp2020={props.scp2020} per30Ampato={props.per30Ampato} per30Apolobamba={props.per30Apolobamba} per30Barroso={props.per30Barroso}
                per30Blanca={props.per30Blanca} per30Carabaya={props.per30Carabaya} per30Central={props.per30Central} per30Chila={props.per30Chila}
                per30Chonta={props.per30Chonta} per30Huagoruncho={props.per30Huagoruncho} per30Huallanca={props.per30Huallanca} per30Huanzo={props.per30Huanzo}
                per30Huayhuash={props.per30Huayhuash} per30Huaytapallana={props.per30Huaytapallana} per30LaRaya={props.per30LaRaya} per30LaViuda={props.per30LaViuda}
                per30Otros={props.per30Otros} per30Raura={props.per30Raura} per30Urubamba={props.per30Urubamba} per30Vilcabamba={props.per30Vilcabamba} per30Vilcanota={props.per30Vilcanota}
                per30Volcanica={props.per30Volcanica} per90Ampato={props.per90Ampato} per90Apolobamba={props.per90Apolobamba} per90Barroso={props.per90Barroso}
                per90Blanca={props.per90Blanca} per90Carabaya={props.per90Carabaya} per90Central={props.per90Central} per90Chila={props.per90Chila}
                per90Chonta={props.per90Chonta} per90Huagoruncho={props.per90Huagoruncho} per90Huallanca={props.per90Huallanca} per90Huanzo={props.per90Huanzo}
                per90Huayhuash={props.per90Huayhuash} per90Huaytapallana={props.per90Huaytapallana} per90LaRaya={props.per90LaRaya} per90LaViuda={props.per90LaViuda}
                per90Otros={props.per90Otros} per90Raura={props.per90Raura} per90Urubamba={props.per90Urubamba} per90Vilcabamba={props.per90Vilcabamba} per90Vilcanota={props.per90Vilcanota}
                per90Volcanica={props.per90Volcanica} handleClickClose={handleClickClose}
            />:null}
            {!state.leyenda?null:<Leyenda handleClickClose={handleClickClose} />}
            {!state.tilelayer?null:<Tilelayer openMap={props.openMap} handleClickClose={handleClickClose} />}
        </div>
    );
}