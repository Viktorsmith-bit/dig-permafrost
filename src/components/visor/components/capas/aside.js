import React from 'react';
import { useState } from 'react';
import Capas from './components/capas';
import Leyenda from './components/leyenda';

export default function Aside(props){
    const [state, setState] = useState({capas:false, leyenda:false})

    const handleClickOpen = (e)=>{e.preventDefault(), setState({capas:true})}
    const handleClickClose = (e)=>{e.preventDefault(), setState({capas:false})}
    const handleClickOpenLey = (e)=>{e.preventDefault(), setState({leyenda:true})}
    const handleClickCloseLey = (e)=>{e.preventDefault(), setState({leyenda:false})}

    return(
        <div>
            {
                !state.capas?<div onClick={handleClickOpen} style={{zIndex:"1000"}} className='flex items-center justify-center w-10 h-10 absolute z-20 top-3 right-3 rounded-sm bg-white cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="325" fill="#434040" className="bi bi-stack" viewBox="0 0 16 16">
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                    </svg>
                </div>:<div onClick={handleClickClose} style={{zIndex:"1000"}} className='flex items-center justify-center w-10 h-10 absolute z-20 top-3 right-3 rounded-sm bg-white cursor-pointer'>
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

            <div className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-sm bg-white absolute z-20 top-24 right-3 mt-1' style={{zIndex:"1000"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#434040" className="cursor-pointer bi bi-grid-fill" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                </svg>
            </div>
             
            {!state.capas?null:<Capas 

                hundleClickClosePanam={props.hundleClickClosePanam} hundleClickOpenPanam={props.hundleClickOpenPanam} panam={props.panam}
                hundleClickOpen={props.hundleClickOpen} hundleClickClose={props.hundleClickClose} estado={props.estado} 
                hundleClickOpenChila={props.hundleClickOpenChila} hundleClickCloseChila={props.hundleClickCloseChila} corchila={props.corchila}
                hundleClickOpenCor={props.hundleClickOpenCor} hundleClickCloseCor={props.hundleClickCloseCor} cor={props.cor}
                hundleClickOpenInv={props.hundleClickOpenInv} hundleClickCloseInv={props.hundleClickCloseInv} inv={props.inv}
                hundleClickOpenPer30={props.hundleClickOpenPer30} hundleClickClosePer30={props.hundleClickClosePer30} per30={props.per30}
                hundleClickOpenPer90={props.hundleClickOpenPer90} hundleClickClosePer90={props.hundleClickClosePer90} per90={props.per90}
                hundleClickOpenScp2002={props.hundleClickOpenScp2002} hundleClickCloseScp2002={props.hundleClickCloseScp2002} scp2002={props.scp2002}
                hundleClickOpenScp2003={props.hundleClickOpenScp2003} hundleClickCloseScp2003={props.hundleClickCloseScp2003} scp2003={props.scp2003}
                hundleClickOpenScp2004={props.hundleClickOpenScp2004} hundleClickCloseScp2004={props.hundleClickCloseScp2004} scp2004={props.scp2004}
                hundleClickOpenScp2005={props.hundleClickOpenScp2005} hundleClickCloseScp2005={props.hundleClickCloseScp2005} scp2005={props.scp2005}
                hundleClickOpenScp2006={props.hundleClickOpenScp2006} hundleClickCloseScp2006={props.hundleClickCloseScp2006} scp2006={props.scp2006}
                hundleClickOpenScp2007={props.hundleClickOpenScp2007} hundleClickCloseScp2007={props.hundleClickCloseScp2007} scp2007={props.scp2007}
                hundleClickOpenScp2008={props.hundleClickOpenScp2008} hundleClickCloseScp2008={props.hundleClickCloseScp2008} scp2008={props.scp2008}
                hundleClickOpenScp2009={props.hundleClickOpenScp2009} hundleClickCloseScp2009={props.hundleClickCloseScp2009} scp2009={props.scp2009}
                hundleClickOpenScp2010={props.hundleClickOpenScp2010} hundleClickCloseScp2010={props.hundleClickCloseScp2010} scp2010={props.scp2010}
                hundleClickOpenScp2011={props.hundleClickOpenScp2011} hundleClickCloseScp2011={props.hundleClickCloseScp2011} scp2011={props.scp2011}
                hundleClickOpenScp2012={props.hundleClickOpenScp2012} hundleClickCloseScp2012={props.hundleClickCloseScp2012} scp2012={props.scp2012}
                hundleClickOpenScp2013={props.hundleClickOpenScp2013} hundleClickCloseScp2013={props.hundleClickCloseScp2013} scp2013={props.scp2013}
                hundleClickOpenScp2014={props.hundleClickOpenScp2014} hundleClickCloseScp2014={props.hundleClickCloseScp2014} scp2014={props.scp2014}
                hundleClickOpenScp2015={props.hundleClickOpenScp2015} hundleClickCloseScp2015={props.hundleClickCloseScp2015} scp2015={props.scp2015}
                hundleClickOpenScp2016={props.hundleClickOpenScp2016} hundleClickCloseScp2016={props.hundleClickCloseScp2016} scp2016={props.scp2016}
                hundleClickOpenScp2017={props.hundleClickOpenScp2017} hundleClickCloseScp2017={props.hundleClickCloseScp2017} scp2017={props.scp2017}
                hundleClickOpenScp2018={props.hundleClickOpenScp2018} hundleClickCloseScp2018={props.hundleClickCloseScp2018} scp2018={props.scp2018}
                hundleClickOpenScp2019={props.hundleClickOpenScp2019} hundleClickCloseScp2019={props.hundleClickCloseScp2019} scp2019={props.scp2019}
                hundleClickOpenScp2020={props.hundleClickOpenScp2020} hundleClickCloseScp2020={props.hundleClickCloseScp2020} scp2020={props.scp2020}
            />}
            {!state.leyenda?null:<Leyenda />}
        </div>
    );
}