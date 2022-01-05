import React from 'react';
import {useState} from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import Creditos from './components/creditos';
import Geoportal from './components/geoportal';
import LeftAside from './components/leftAside';

import Aside from './components/capas/aside';
import Coordenadas360 from './components/panoramicas/coordenadas360';
import Panoramicas from './components/panoramicas/panoramicas';

import Permafrost30 from './dataBase/permafrost/permafrost30';
import Cordilleras from './dataBase/cordilleras/cordilleras';
import UhCordilleraBlanca from './dataBase/uh_permafrost/uh_cordillerablanca';
import Permafrost90 from './dataBase/permafrost/permafrost90';
import UhCordilleraChila from './dataBase/uh_permafrost/uh_cordillerachila';
import GrUnionAltaCerteza from './dataBase/gr_union_altacerteza.js/gr_union_altacerteza';
import Scp2002V1 from './dataBase/nieve/scp_2002_v1';
import Scp2003V1 from './dataBase/nieve/scp_2003_v1';
import Scp2004V1 from './dataBase/nieve/scp_2004_v1';
import Scp2005V1 from './dataBase/nieve/scp_2005_v1';
import Scp2006V1 from './dataBase/nieve/scp_2006_v1';
import Scp2007V1 from './dataBase/nieve/scp_2007_v1';
import Scp2008V1 from './dataBase/nieve/scp_2008_v1';
import Scp2009V1 from './dataBase/nieve/scp_2009_v1';
import Scp2010V1 from './dataBase/nieve/scp_2010_v1';
import Scp2011V1 from './dataBase/nieve/scp_2011_v1';
import Scp2012V1 from './dataBase/nieve/scp_2012_v1';
import Scp2013V1 from './dataBase/nieve/scp_2013_v1';
import Scp2014V1 from './dataBase/nieve/scp_2014_v1';
import Scp2015V1 from './dataBase/nieve/scp_2015_v1';
import Scp2016V1 from './dataBase/nieve/scp_2016_v1';
import Scp2017V1 from './dataBase/nieve/scp_2017_v1';
import Scp2018V1 from './dataBase/nieve/scp_2018_v1';
import Scp2019V1 from './dataBase/nieve/scp_2019_v1';
import Scp2020V1 from './dataBase/nieve/scp_2020_v1';

export default function MapViewer(){
    const [map, setMap] = useState({open:"1"});

    const [state, setState] = useState({open:""});
    const [stateOpen, setStateOpen] = useState(true);
    const [panam , setPanam] = useState(true)
    const [corblanca, setCorblanca] = useState(true);
    const [corchila, setCorchila] = useState(true);
    const [cor, setCor] = useState(true);
    const [inv, setInv] = useState(true);
    const [per30, setPer30] = useState(true);
    const [per90, setPer90] = useState(true);
    const [scp2002, setScp2002] = useState(true);
    const [scp2003, setScp2003] = useState(true);
    const [scp2004, setScp2004] = useState(true);
    const [scp2005, setScp2005] = useState(true);
    const [scp2006, setScp2006] = useState(true);
    const [scp2007, setScp2007] = useState(true);
    const [scp2008, setScp2008] = useState(true);
    const [scp2009, setScp2009] = useState(true);
    const [scp2010, setScp2010] = useState(true);
    const [scp2011, setScp2011] = useState(true);
    const [scp2012, setScp2012] = useState(true);
    const [scp2013, setScp2013] = useState(true);
    const [scp2014, setScp2014] = useState(true);
    const [scp2015, setScp2015] = useState(true);
    const [scp2016, setScp2016] = useState(true);
    const [scp2017, setScp2017] = useState(true);
    const [scp2018, setScp2018] = useState(true);
    const [scp2019, setScp2019] = useState(true);
    const [scp2020, setScp2020] = useState(true);

    const openMap = (e)=>{
        e.preventDefault();
        setMap({open:e.target.id})
    }

    const hundleClicOpen360 = (e)=>{
        e.preventDefault()
        setState({open:e.target.id})
        setStateOpen(false)
    }
    const hundleClicClose360 = (e)=>{
        e.preventDefault()
        setStateOpen(true)}

    const hundleClickOpenPanam = (e)=>{e.preventDefault(), setPanam(false)}
    const hundleClickClosePanam = (e)=>{e.preventDefault(), setPanam(true)}

    const hundleClickOpen = (e)=>{e.preventDefault(), setCorblanca(true)}
    const hundleClickClose = (e)=>{e.preventDefault(), setCorblanca(false)}
    const hundleClickOpenChila = (e)=>{e.preventDefault(), setCorchila(true)}
    const hundleClickCloseChila = (e)=>{e.preventDefault(), setCorchila(false)}
    const hundleClickOpenCor = (e)=>{e.preventDefault(), setCor(true)}
    const hundleClickCloseCor = (e)=>{e.preventDefault(), setCor(false)}
    const hundleClickOpenInv = (e)=>{e.preventDefault(), setInv(true)}
    const hundleClickCloseInv = (e)=>{e.preventDefault(), setInv(false)}
    const hundleClickOpenPer30 = (e)=>{e.preventDefault(), setPer30(true)}
    const hundleClickClosePer30 = (e)=>{e.preventDefault(), setPer30(false)}
    const hundleClickOpenPer90 = (e)=>{e.preventDefault(), setPer90(true)}
    const hundleClickClosePer90 = (e)=>{e.preventDefault(), setPer90(false)}
    const hundleClickOpenScp2002 = (e)=>{e.preventDefault(), setScp2002(true)}
    const hundleClickCloseScp2002 = (e)=>{e.preventDefault(), setScp2002(false)}
    const hundleClickOpenScp2003 = (e)=>{e.preventDefault(), setScp2003(true)}
    const hundleClickCloseScp2003 = (e)=>{e.preventDefault(), setScp2003(false)}
    const hundleClickOpenScp2004 = (e)=>{e.preventDefault(), setScp2004(true)}
    const hundleClickCloseScp2004 = (e)=>{e.preventDefault(), setScp2004(false)}
    const hundleClickOpenScp2005 = (e)=>{e.preventDefault(), setScp2005(true)}
    const hundleClickCloseScp2005 = (e)=>{e.preventDefault(), setScp2005(false)}
    const hundleClickOpenScp2006 = (e)=>{e.preventDefault(), setScp2006(true)}
    const hundleClickCloseScp2006 = (e)=>{e.preventDefault(), setScp2006(false)}
    const hundleClickOpenScp2007 = (e)=>{e.preventDefault(), setScp2007(true)}
    const hundleClickCloseScp2007 = (e)=>{e.preventDefault(), setScp2007(false)}
    const hundleClickOpenScp2008 = (e)=>{e.preventDefault(), setScp2008(true)}
    const hundleClickCloseScp2008 = (e)=>{e.preventDefault(), setScp2008(false)}
    const hundleClickOpenScp2009 = (e)=>{e.preventDefault(), setScp2009(true)}
    const hundleClickCloseScp2009 = (e)=>{e.preventDefault(), setScp2009(false)}
    const hundleClickOpenScp2010 = (e)=>{e.preventDefault(), setScp2010(true)}
    const hundleClickCloseScp2010 = (e)=>{e.preventDefault(), setScp2010(false)}
    const hundleClickOpenScp2011 = (e)=>{e.preventDefault(), setScp2011(true)}
    const hundleClickCloseScp2011 = (e)=>{e.preventDefault(), setScp2011(false)}
    const hundleClickOpenScp2012 = (e)=>{e.preventDefault(), setScp2012(true)}
    const hundleClickCloseScp2012 = (e)=>{e.preventDefault(), setScp2012(false)}
    const hundleClickOpenScp2013 = (e)=>{e.preventDefault(), setScp2013(true)}
    const hundleClickCloseScp2013 = (e)=>{e.preventDefault(), setScp2013(false)}
    const hundleClickOpenScp2014 = (e)=>{e.preventDefault(), setScp2014(true)}
    const hundleClickCloseScp2014 = (e)=>{e.preventDefault(), setScp2014(false)}
    const hundleClickOpenScp2015 = (e)=>{e.preventDefault(), setScp2015(true)}
    const hundleClickCloseScp2015 = (e)=>{e.preventDefault(), setScp2015(false)}
    const hundleClickOpenScp2016 = (e)=>{e.preventDefault(), setScp2016(true)}
    const hundleClickCloseScp2016 = (e)=>{e.preventDefault(), setScp2016(false)}
    const hundleClickOpenScp2017 = (e)=>{e.preventDefault(), setScp2017(true)}
    const hundleClickCloseScp2017 = (e)=>{e.preventDefault(), setScp2017(false)}
    const hundleClickOpenScp2018 = (e)=>{e.preventDefault(), setScp2018(true)}
    const hundleClickCloseScp2018 = (e)=>{e.preventDefault(), setScp2018(false)}
    const hundleClickOpenScp2019 = (e)=>{e.preventDefault(), setScp2019(true)}
    const hundleClickCloseScp2019 = (e)=>{e.preventDefault(), setScp2019(false)}
    const hundleClickOpenScp2020 = (e)=>{e.preventDefault(), setScp2020(true)}
    const hundleClickCloseScp2020 = (e)=>{e.preventDefault(), setScp2020(false)}
    return(
        <div className='h-screen border'>
            <Aside 
                openMap={openMap}
                hundleClickClosePanam={hundleClickClosePanam} hundleClickOpenPanam={hundleClickOpenPanam} panam={panam}
                hundleClickOpen={hundleClickOpen} hundleClickClose={hundleClickClose} estado={corblanca} 
                hundleClickOpenChila={hundleClickOpenChila} hundleClickCloseChila={hundleClickCloseChila} corchila={corchila}
                 hundleClickOpenCor={hundleClickOpenCor} hundleClickCloseCor={hundleClickCloseCor} cor={cor}
                 hundleClickOpenInv={hundleClickOpenInv} hundleClickCloseInv={hundleClickCloseInv} inv={inv}
                 hundleClickOpenPer30={hundleClickOpenPer30} hundleClickClosePer30={hundleClickClosePer30} per30={per30}
                 hundleClickOpenPer90={hundleClickOpenPer90} hundleClickClosePer90={hundleClickClosePer90} per90={per90}
                 hundleClickOpenScp2002={hundleClickOpenScp2002} hundleClickCloseScp2002={hundleClickCloseScp2002} scp2002={scp2002}
                 hundleClickOpenScp2003={hundleClickOpenScp2003} hundleClickCloseScp2003={hundleClickCloseScp2003} scp2003={scp2003}
                 hundleClickOpenScp2004={hundleClickOpenScp2004} hundleClickCloseScp2004={hundleClickCloseScp2004} scp2004={scp2004}
                 hundleClickOpenScp2005={hundleClickOpenScp2005} hundleClickCloseScp2005={hundleClickCloseScp2005} scp2005={scp2005}
                 hundleClickOpenScp2006={hundleClickOpenScp2006} hundleClickCloseScp2006={hundleClickCloseScp2006} scp2006={scp2006}
                 hundleClickOpenScp2007={hundleClickOpenScp2007} hundleClickCloseScp2007={hundleClickCloseScp2007} scp2007={scp2007}
                 hundleClickOpenScp2008={hundleClickOpenScp2008} hundleClickCloseScp2008={hundleClickCloseScp2008} scp2008={scp2008}
                 hundleClickOpenScp2009={hundleClickOpenScp2009} hundleClickCloseScp2009={hundleClickCloseScp2009} scp2009={scp2009}
                 hundleClickOpenScp2010={hundleClickOpenScp2010} hundleClickCloseScp2010={hundleClickCloseScp2010} scp2010={scp2010}
                 hundleClickOpenScp2011={hundleClickOpenScp2011} hundleClickCloseScp2011={hundleClickCloseScp2011} scp2011={scp2011}
                 hundleClickOpenScp2012={hundleClickOpenScp2012} hundleClickCloseScp2012={hundleClickCloseScp2012} scp2012={scp2012}
                 hundleClickOpenScp2013={hundleClickOpenScp2013} hundleClickCloseScp2013={hundleClickCloseScp2013} scp2013={scp2013}
                 hundleClickOpenScp2014={hundleClickOpenScp2014} hundleClickCloseScp2014={hundleClickCloseScp2014} scp2014={scp2014}
                 hundleClickOpenScp2015={hundleClickOpenScp2015} hundleClickCloseScp2015={hundleClickCloseScp2015} scp2015={scp2015}
                 hundleClickOpenScp2016={hundleClickOpenScp2016} hundleClickCloseScp2016={hundleClickCloseScp2016} scp2016={scp2016}
                 hundleClickOpenScp2017={hundleClickOpenScp2017} hundleClickCloseScp2017={hundleClickCloseScp2017} scp2017={scp2017}
                 hundleClickOpenScp2018={hundleClickOpenScp2018} hundleClickCloseScp2018={hundleClickCloseScp2018} scp2018={scp2018}
                 hundleClickOpenScp2019={hundleClickOpenScp2019} hundleClickCloseScp2019={hundleClickCloseScp2019} scp2019={scp2019}
                 hundleClickOpenScp2020={hundleClickOpenScp2020} hundleClickCloseScp2020={hundleClickCloseScp2020} scp2020={scp2020}
            />
             {stateOpen?null:<Panoramicas hundleClicClose360={hundleClicClose360} state={state.open} />}
            <MapContainer center={[-12.114974922615183, -75.842071978681196]} zoom={6.5} scrollWheelZoom={true} >
                {
                    map.open === "1"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />:null
                }
                {
                    map.open === "2"?<TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                    />:null
                }
                {
                    map.open === "3"?<TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />:null
                }
                {
                    map.open === "4"?<TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    />:null
                }
                {
                    map.open === "5"?<TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png"
                    />:null
                }

                {
                    map.open === "1"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}"
                        ext='png'
                    />:null
                }
                {
                    map.open === "1"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}"
                        ext='png'
                    />:null
                }
        
                <Geoportal />
                <Creditos />
                <LeftAside />
                {panam?null:<Coordenadas360 hundleClicOpen360={hundleClicOpen360} />}

                {corchila?<UhCordilleraChila />:null}
                {corblanca?<UhCordilleraBlanca />:null}
                {cor?<Cordilleras />:null}
                {!scp2002?<Scp2002V1 />:null}
                {!scp2003?<Scp2003V1 />:null}
                {!scp2004?<Scp2004V1 />:null}
                {!scp2005?<Scp2005V1 />:null}
                {!scp2006?<Scp2006V1 />:null}
                {!scp2007?<Scp2007V1 />:null}
                {!scp2008?<Scp2008V1 />:null}
                {!scp2009?<Scp2009V1 />:null}
                {!scp2010?<Scp2010V1 />:null}
                {!scp2011?<Scp2011V1 />:null}
                {!scp2012?<Scp2012V1 />:null}
                {!scp2013?<Scp2013V1 />:null}
                {!scp2014?<Scp2014V1 />:null}
                {!scp2015?<Scp2015V1 />:null}
                {!scp2016?<Scp2016V1 />:null}
                {!scp2017?<Scp2017V1 />:null}
                {!scp2018?<Scp2018V1 />:null}
                {!scp2019?<Scp2019V1 />:null}
                {!scp2020?<Scp2020V1 />:null}
                {!per90?<Permafrost90 />:null}
                {!inv?<GrUnionAltaCerteza />:null}
                {!per30?<Permafrost30 />:null}
            </MapContainer>
        </div>
    );
}