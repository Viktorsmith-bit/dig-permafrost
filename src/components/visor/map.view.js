import React from 'react';
import {useState} from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import Creditos from './components/creditos';
import Geoportal from './components/geoportal';
import LeftAside from './components/leftAside';
import Aside from './components/capas/aside';
import Coordenadas360 from './components/panoramicas/coordenadas360';
import Panoramicas from './components/panoramicas/panoramicas';
import UhCordilleras from './dataBase/uh_permafrost/uh_cordilleras';
import CordillerasPeru from './dataBase/cordilleras/uh_cordillerasPeru';
import UhCordilleraBlanca from './dataBase/uh_permafrost/uh_cordillerablanca';
import UhCordilleraChila from './dataBase/uh_permafrost/uh_cordillerachila';
import UhPuntosTrabajo from './dataBase/uh_permafrost/uh_puntos_trabajo';
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
import Per30Ampato from './dataBase/permafrost/permafrost30/per30_ampato';
import Per30Apolobamba from './dataBase/permafrost/permafrost30/per30_apolobamba';
import Per30Barroso from './dataBase/permafrost/permafrost30/per30_barroso';
import Per30Blanca from './dataBase/permafrost/permafrost30/per30_blanca';
import Per30Carabaya from './dataBase/permafrost/permafrost30/per30_carabaya';
import Per30Central from './dataBase/permafrost/permafrost30/per30_central';
import Per30Chila from './dataBase/permafrost/permafrost30/per30_chila';
import Per30Chonta from './dataBase/permafrost/permafrost30/per30_chonta';
import Per30Huagoruncho from './dataBase/permafrost/permafrost30/per30_huagoruncho';
import Per30Huallanca from './dataBase/permafrost/permafrost30/per30_huallanca';
import Per30Huanzo from './dataBase/permafrost/permafrost30/per30_huanzo';
import Per30Huayhuash from './dataBase/permafrost/permafrost30/per30_huayhuash';
import Per30Huaytapallana from './dataBase/permafrost/permafrost30/per30_huaytapallana';
import Per30LaRaya from './dataBase/permafrost/permafrost30/per30_la_raya';
import Per30LaViuda from './dataBase/permafrost/permafrost30/per30_la_viuda';
import Per30Otros from './dataBase/permafrost/permafrost30/per30_otros';
import Per30Raura from './dataBase/permafrost/permafrost30/per30_raura';
import Per30Urubamba from './dataBase/permafrost/permafrost30/per30_urubamba';
import Per30Vilcabamba from './dataBase/permafrost/permafrost30/per30_vilcabamba';
import Per30Vilcanota from './dataBase/permafrost/permafrost30/per30_vilcanota';
import Per30Volcanica from './dataBase/permafrost/permafrost30/per30_volcanica';
import Per90Ampato from './dataBase/permafrost/permafrost90/per90_ampato';
import Per90Apolobamba from './dataBase/permafrost/permafrost90/per90_apolobamba';
import Per90Barroso from './dataBase/permafrost/permafrost90/per90_barroso';
import Per90Blanca from './dataBase/permafrost/permafrost90/per90_blanca';
import Per90Carabaya from './dataBase/permafrost/permafrost90/per90_carabaya';
import Per90Central from './dataBase/permafrost/permafrost90/per90_central';
import Per90Chila from './dataBase/permafrost/permafrost90/per90_chila';
import Per90Chonta from './dataBase/permafrost/permafrost90/per90_chonta';
import Per90Huagoruncho from './dataBase/permafrost/permafrost90/per90_huagoruncho';
import Per90Huallanca from './dataBase/permafrost/permafrost90/per90_huallanca';
import Per90Huanzo from './dataBase/permafrost/permafrost90/per90_huanzo';
import Per90Huayhuash from './dataBase/permafrost/permafrost90/per90_huayhuash';
import Per90Huaytapallana from './dataBase/permafrost/permafrost90/per90_huaytapallana';
import Per90LaRaya from './dataBase/permafrost/permafrost90/per90_la_raya';
import Per90LaViuda from './dataBase/permafrost/permafrost90/per90_la_viuda';
import Per90Otros from './dataBase/permafrost/permafrost90/per90_otros';
import Per90Raura from './dataBase/permafrost/permafrost90/per90_raura';
import Per90Urubamba from './dataBase/permafrost/permafrost90/per90_urubamba';
import Per90Vilcabamba from './dataBase/permafrost/permafrost90/per90_vilcabamba';
import Per90Vilcanota from './dataBase/permafrost/permafrost90/per90_vilcanota';
import Per90Volcanica from './dataBase/permafrost/permafrost90/per90_volcanica';

export default function MapViewer(){
    const [map, setMap] = useState({open:"1"});
    const [state, setState] = useState({open:""});
    const [stateOpen, setStateOpen] = useState(true);
    const [panam , setPanam] = useState(true)
    const [foto360, setFoto360] = useState({state:"close360"});
    const [cor, setCor] = useState({state:"openCor"});
    const [corBlanca, setCorBlanca] = useState({state:"openCorBlanca"});
    const [corChila, setCorChila] = useState({state:"openCorChila"});
    const [corPeru, setCorPeru] = useState({state:"openCorPeru"});
    const [puntosTrabajo, setPuntosTrabajo] = useState({state:"closePuntosTrabajo"});
    const [inv, setInv] = useState({state:"closeInv"});
    const [scp2002, setScp2002] = useState({state:"closeScp2002"});
    const [scp2003, setScp2003] = useState({state:"closeScp2003"});
    const [scp2004, setScp2004] = useState({state:"closeScp2004"});
    const [scp2005, setScp2005] = useState({state:"closeScp2005"});
    const [scp2006, setScp2006] = useState({state:"closeScp2006"});
    const [scp2007, setScp2007] = useState({state:"closeScp2007"});
    const [scp2008, setScp2008] = useState({state:"closeScp2008"});
    const [scp2009, setScp2009] = useState({state:"closeScp2009"});
    const [scp2010, setScp2010] = useState({state:"closeScp2010"});
    const [scp2011, setScp2011] = useState({state:"closeScp2011"});
    const [scp2012, setScp2012] = useState({state:"closeScp2012"});
    const [scp2013, setScp2013] = useState({state:"closeScp2013"});
    const [scp2014, setScp2014] = useState({state:"closeScp2014"});
    const [scp2015, setScp2015] = useState({state:"closeScp2015"});
    const [scp2016, setScp2016] = useState({state:"closeScp2016"});
    const [scp2017, setScp2017] = useState({state:"closeScp2017"});
    const [scp2018, setScp2018] = useState({state:"closeScp2018"});
    const [scp2019, setScp2019] = useState({state:"closeScp2019"});
    const [scp2020, setScp2020] = useState({state:"closeScp2020"});
    const [per30Ampato, setPer30Ampato] = useState({state:"closePer30Ampato"});
    const [per30Apolobamba, setPer30Apolobamba] = useState({state:"closePer30Apolobamba"});
    const [per30Barroso, setPer30Barroso] = useState({state:"closePer30Barroso"});
    const [per30Blanca, setPer30Blanca] = useState({state:"closePer30Blanca"});
    const [per30Carabaya, setPer30Carabaya] = useState({state:"closePer30Carabaya"});
    const [per30Central, setPer30Central] = useState({state:"closePer30Central"});
    const [per30Chila, setPer30Chila] = useState({state:"closePer30Chila"});
    const [per30Chonta, setPer30Chonta] = useState({state:"closePer30Chonta"});
    const [per30Huagoruncho, setPer30Huagoruncho] = useState({state:"closePer30Huagoruncho"});
    const [per30Huallanca, setPer30Huallanca] = useState({state:"closePer30Huallanca"});
    const [per30Huanzo, setPer30Huanzo] = useState({state:"closePer30Huanzo"});
    const [per30Huayhuash, setPer30Huayhuash] = useState({state:"closePer30Huayhuash"});
    const [per30Huaytapallana, setPer30Huaytapallana] = useState({state:"closePer30Huaytapallana"});
    const [per30LaRaya, setPer30LaRaya] = useState({state:"closePer30LaRaya"});
    const [per30LaViuda, setPer30LaViuda] = useState({state:"closePer30LaViuda"});
    const [per30Otros, setPer30Otros] = useState({state:"closePer30Otros"});
    const [per30Raura, setPer30Raura] = useState({state:"closePer30Raura"});
    const [per30Urubamba, setPer30Urubamba] = useState({state:"closePer30Urubamba"});
    const [per30Vilcabamba, setPer30Vilcabamba] = useState({state:"closePer30Vilcabamba"});
    const [per30Vilcanota, setPer30Vilcanota] = useState({state:"closePer30Vilcanota"});
    const [per30Volcanica, setPer30Volcanica] = useState({state:"closePer30Volcanica"});
    const [per90Ampato, setPer90Ampato] = useState({state:"closePer90Ampato"});
    const [per90Apolobamba, setPer90Apolobamba] = useState({state:"closePer90Apolobamba"});
    const [per90Barroso, setPer90Barroso] = useState({state:"closePer90Barroso"});
    const [per90Blanca, setPer90Blanca] = useState({state:"closePer90Blanca"});
    const [per90Carabaya, setPer90Carabaya] = useState({state:"closePer90Carabaya"});
    const [per90Central, setPer90Central] = useState({state:"closePer90Central"});
    const [per90Chila, setPer90Chila] = useState({state:"closePer90Chila"});
    const [per90Chonta, setPer90Chonta] = useState({state:"closePer90Chonta"});
    const [per90Huagoruncho, setPer90Huagoruncho] = useState({state:"closePer90Huagoruncho"});
    const [per90Huallanca, setPer90Huallanca] = useState({state:"closePer90Huallanca"});
    const [per90Huanzo, setPer90Huanzo] = useState({state:"closePer90Huanzo"});
    const [per90Huayhuash, setPer90Huayhuash] = useState({state:"closePer90Huayhuash"});
    const [per90Huaytapallana, setPer90Huaytapallana] = useState({state:"closePer90Huaytapallana"});
    const [per90LaRaya, setPer90LaRaya] = useState({state:"closePer90LaRaya"});
    const [per90LaViuda, setPer90LaViuda] = useState({state:"closePer90LaViuda"});
    const [per90Otros, setPer90Otros] = useState({state:"closePer90Otros"});
    const [per90Raura, setPer90Raura] = useState({state:"closePer90Raura"});
    const [per90Urubamba, setPer90Urubamba] = useState({state:"closePer90Urubamba"});
    const [per90Vilcabamba, setPer90Vilcabamba] = useState({state:"closePer90Vilcabamba"});
    const [per90Vilcanota, setPer90Vilcanota] = useState({state:"closePer90Vilcanota"});
    const [per90Volcanica, setPer90Volcanica] = useState({state:"closePer90Volcanica"});

    const openMap = (e)=>{e.preventDefault(); setMap({open:e.target.id})}
    const hundleClicOpen360 = (e)=>{e.preventDefault(); setState({open:e.target.id}); setStateOpen(false)}
    const hundleClicClose360 = (e)=>{e.preventDefault(); setStateOpen(true)}
    const hundleClickOpenPanam = (e)=>{e.preventDefault(), setPanam(false)}
    const hundleClickClosePanam = (e)=>{e.preventDefault(), setPanam(true)}

    const hundleClickEstadoVisor = (e)=>{e.preventDefault()
        return e.target.id === "openCor" || e.target.id === "closeCor"?setCor({state:e.target.id}):
        e.target.id === "openCorBlanca" || e.target.id === "closeCorBlanca"?setCorBlanca({state:e.target.id}):
        e.target.id === "openCorChila" || e.target.id === "closeCorChila"?setCorChila({state:e.target.id}):
        e.target.id === "openCorPeru" || e.target.id === "closeCorPeru"?setCorPeru({state:e.target.id}):
        e.target.id === "openPuntosTrabajo" || e.target.id === "closePuntosTrabajo"?setPuntosTrabajo({state:e.target.id}):
        e.target.id === "open360" || e.target.id === "close360"?setFoto360({state:e.target.id}):
        e.target.id === "openScp2002" || e.target.id === "closeScp2002"?setScp2002({state:e.target.id}):
        e.target.id === "openScp2003" || e.target.id === "closeScp2003"?setScp2003({state:e.target.id}):
        e.target.id === "openScp2004" || e.target.id === "closeScp2004"?setScp2004({state:e.target.id}):
        e.target.id === "openScp2005" || e.target.id === "closeScp2005"?setScp2005({state:e.target.id}):
        e.target.id === "openScp2006" || e.target.id === "closeScp2006"?setScp2006({state:e.target.id}):
        e.target.id === "openScp2007" || e.target.id === "closeScp2007"?setScp2007({state:e.target.id}):
        e.target.id === "openScp2008" || e.target.id === "closeScp2008"?setScp2008({state:e.target.id}):
        e.target.id === "openScp2009" || e.target.id === "closeScp2009"?setScp2009({state:e.target.id}):
        e.target.id === "openScp2010" || e.target.id === "closeScp2010"?setScp2010({state:e.target.id}):
        e.target.id === "openScp2011" || e.target.id === "closeScp2011"?setScp2011({state:e.target.id}):
        e.target.id === "openScp2012" || e.target.id === "closeScp2012"?setScp2012({state:e.target.id}):
        e.target.id === "openScp2013" || e.target.id === "closeScp2013"?setScp2013({state:e.target.id}):
        e.target.id === "openScp2014" || e.target.id === "closeScp2014"?setScp2014({state:e.target.id}):
        e.target.id === "openScp2015" || e.target.id === "closeScp2015"?setScp2015({state:e.target.id}):
        e.target.id === "openScp2016" || e.target.id === "closeScp2016"?setScp2016({state:e.target.id}):
        e.target.id === "openScp2017" || e.target.id === "closeScp2017"?setScp2017({state:e.target.id}):
        e.target.id === "openScp2018" || e.target.id === "closeScp2018"?setScp2018({state:e.target.id}):
        e.target.id === "openScp2019" || e.target.id === "closeScp2019"?setScp2019({state:e.target.id}):
        e.target.id === "openScp2020" || e.target.id === "closeScp2020"?setScp2020({state:e.target.id}):
        e.target.id === "openPer30Ampato" || e.target.id === "closePer30Ampato"?setPer30Ampato({state:e.target.id}):
        e.target.id === "openPer30Apolobamba" || e.target.id === "closePer30Apolobamba"?setPer30Apolobamba({state:e.target.id}):
        e.target.id === "openPer30Barroso" || e.target.id === "closePer30Barroso"?setPer30Barroso({state:e.target.id}):
        e.target.id === "openPer30Blanca" || e.target.id === "closePer30Blanca"?setPer30Blanca({state:e.target.id}):
        e.target.id === "openPer30Carabaya" || e.target.id === "closePer30Carabaya"?setPer30Carabaya({state:e.target.id}):
        e.target.id === "openPer30Central" || e.target.id === "closePer30Central"?setPer30Central({state:e.target.id}):
        e.target.id === "openPer30Chila" || e.target.id === "closePer30Chila"?setPer30Chila({state:e.target.id}):
        e.target.id === "openPer30Chonta" || e.target.id === "closePer30Chonta"?setPer30Chonta({state:e.target.id}):
        e.target.id === "openPer30Huagoruncho" || e.target.id === "closePer30Huagoruncho"?setPer30Huagoruncho({state:e.target.id}):
        e.target.id === "openPer30Huallanca" || e.target.id === "closePer30Huallanca"?setPer30Huallanca({state:e.target.id}):
        e.target.id === "openPer30Huanzo" || e.target.id === "closePer30Huanzo"?setPer30Huanzo({state:e.target.id}):
        e.target.id === "openPer30Huayhuash" || e.target.id === "closePer30Huayhuash"?setPer30Huayhuash({state:e.target.id}):
        e.target.id === "openPer30Huaytapallana" || e.target.id === "closePer30Huaytapallana"?setPer30Huaytapallana({state:e.target.id}):
        e.target.id === "openPer30LaRaya" || e.target.id === "closePer30LaRaya"?setPer30LaRaya({state:e.target.id}):
        e.target.id === "openPer30LaViuda" || e.target.id === "closePer30LaViuda"?setPer30LaViuda({state:e.target.id}):
        e.target.id === "openPer30Otros" || e.target.id === "closePer30Otros"?setPer30Otros({state:e.target.id}):
        e.target.id === "openPer30Raura" || e.target.id === "closePer30Raura"?setPer30Raura({state:e.target.id}):
        e.target.id === "openPer30Urubamba" || e.target.id === "closePer30Urubamba"?setPer30Urubamba({state:e.target.id}):
        e.target.id === "openPer30Vilcabamba" || e.target.id === "closePer30Vilcabamba"?setPer30Vilcabamba({state:e.target.id}):
        e.target.id === "openPer30Vilcanota" || e.target.id === "closePer30Vilcanota"?setPer30Vilcanota({state:e.target.id}):
        e.target.id === "openPer30Volcanica" || e.target.id === "closePer30Volcanica"?setPer30Volcanica({state:e.target.id}):
        e.target.id === "openPer90Ampato" || e.target.id === "closePer90Ampato"?setPer90Ampato({state:e.target.id}):
        e.target.id === "openPer90Apolobamba" || e.target.id === "closePer90Apolobamba"?setPer90Apolobamba({state:e.target.id}):
        e.target.id === "openPer90Barroso" || e.target.id === "closePer90Barroso"?setPer90Barroso({state:e.target.id}):
        e.target.id === "openPer90Blanca" || e.target.id === "closePer90Blanca"?setPer90Blanca({state:e.target.id}):
        e.target.id === "openPer90Carabaya" || e.target.id === "closePer90Carabaya"?setPer90Carabaya({state:e.target.id}):
        e.target.id === "openPer90Central" || e.target.id === "closePer90Central"?setPer90Central({state:e.target.id}):
        e.target.id === "openPer90Chila" || e.target.id === "closePer90Chila"?setPer90Chila({state:e.target.id}):
        e.target.id === "openPer90Chonta" || e.target.id === "closePer90Chonta"?setPer90Chonta({state:e.target.id}):
        e.target.id === "openPer90Huagoruncho" || e.target.id === "closePer90Huagoruncho"?setPer90Huagoruncho({state:e.target.id}):
        e.target.id === "openPer90Huallanca" || e.target.id === "closePer90Huallanca"?setPer90Huallanca({state:e.target.id}):
        e.target.id === "openPer90Huanzo" || e.target.id === "closePer90Huanzo"?setPer90Huanzo({state:e.target.id}):
        e.target.id === "openPer90Huayhuash" || e.target.id === "closePer90Huayhuash"?setPer90Huayhuash({state:e.target.id}):
        e.target.id === "openPer90Huaytapallana" || e.target.id === "closePer90Huaytapallana"?setPer90Huaytapallana({state:e.target.id}):
        e.target.id === "openPer90LaRaya" || e.target.id === "closePer90LaRaya"?setPer90LaRaya({state:e.target.id}):
        e.target.id === "openPer90LaViuda" || e.target.id === "closePer90LaViuda"?setPer90LaViuda({state:e.target.id}):
        e.target.id === "openPer90Otros" || e.target.id === "closePer90Otros"?setPer90Otros({state:e.target.id}):
        e.target.id === "openPer90Raura" || e.target.id === "closePer90Raura"?setPer90Raura({state:e.target.id}):
        e.target.id === "openPer90Urubamba" || e.target.id === "closePer90Urubamba"?setPer90Urubamba({state:e.target.id}):
        e.target.id === "openPer90Vilcabamba" || e.target.id === "closePer90Vilcabamba"?setPer90Vilcabamba({state:e.target.id}):
        e.target.id === "openPer90Vilcanota" || e.target.id === "closePer90Vilcanota"?setPer90Vilcanota({state:e.target.id}):
        e.target.id === "openPer90Volcanica" || e.target.id === "closePer90Volcanica"?setPer90Volcanica({state:e.target.id}):
        e.target.id === "openInv" || e.target.id === "closeInv"?setInv({state:e.target.id}):null
    }

    return(
        <div className='h-screen border'>
            <Aside 
                hundleClickEstadoVisor={hundleClickEstadoVisor}
                cor={cor.state} corBlanca={corBlanca.state} corChila={corChila.state} foto360={foto360.state}
                inv={inv.state} openMap={openMap} corPeru={corPeru.state} puntosTrabajo={puntosTrabajo.state}
                hundleClickClosePanam={hundleClickClosePanam} hundleClickOpenPanam={hundleClickOpenPanam} panam={panam}
                scp2002={scp2002.state} scp2003={scp2003.state} scp2004={scp2004.state} scp2005={scp2005.state} scp2006={scp2006.state} scp2007={scp2007.state}
                scp2008={scp2008.state} scp2009={scp2009.state} scp2010={scp2010.state} scp2011={scp2011.state} scp2012={scp2012.state} scp2013={scp2013.state} 
                scp2014={scp2014.state} scp2015={scp2015.state} scp2016={scp2016.state} scp2017={scp2017.state} scp2018={scp2018.state} scp2019={scp2019.state}
                scp2020={scp2020.state} per30Ampato={per30Ampato.state} per30Apolobamba={per30Apolobamba.state} per30Barroso={per30Barroso.state}
                per30Blanca={per30Blanca.state} per30Carabaya={per30Carabaya.state} per30Central={per30Central.state} per30Chila={per30Chila.state}
                per30Chonta={per30Chonta.state} per30Huagoruncho={per30Huagoruncho.state} per30Huallanca={per30Huallanca.state} per30Huanzo={per30Huanzo.state}
                per30Huayhuash={per30Huayhuash.state} per30Huaytapallana={per30Huaytapallana.state} per30LaRaya={per30LaRaya.state} per30LaViuda={per30LaViuda.state}
                per30Otros={per30Otros.state} per30Raura={per30Raura.state} per30Urubamba={per30Urubamba.state} per30Vilcabamba={per30Vilcabamba.state} per30Vilcanota={per30Vilcanota.state}
                per30Volcanica={per30Volcanica.state} per90Ampato={per90Ampato.state} per90Apolobamba={per90Apolobamba.state} per90Barroso={per90Barroso.state}
                per90Blanca={per90Blanca.state} per90Carabaya={per90Carabaya.state} per90Central={per90Central.state} per90Chila={per90Chila.state}
                per90Chonta={per90Chonta.state} per90Huagoruncho={per90Huagoruncho.state} per90Huallanca={per90Huallanca.state} per90Huanzo={per90Huanzo.state}
                per90Huayhuash={per90Huayhuash.state} per90Huaytapallana={per90Huaytapallana.state} per90LaRaya={per90LaRaya.state} per90LaViuda={per90LaViuda.state}
                per90Otros={per90Otros.state} per90Raura={per90Raura.state} per90Urubamba={per90Urubamba.state} per90Vilcabamba={per90Vilcabamba.state} per90Vilcanota={per90Vilcanota.state}
                per90Volcanica={per90Volcanica.state}
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
                {foto360.state === "close360"?null:<Coordenadas360 hundleClicOpen360={hundleClicOpen360} />}
                {cor.state === "openCor"?<CordillerasPeru />:null}
                {corPeru.state === "openCorPeru"?<UhCordilleras />:null}
                {corChila.state === "openCorChila"?<UhCordilleraChila />:null}
                {corBlanca.state === "openCorBlanca"?<UhCordilleraBlanca />:null}
                {puntosTrabajo.state === "closePuntosTrabajo"?null:<UhPuntosTrabajo />}
                {scp2002.state === "closeScp2002"?null:<Scp2002V1 />}
                {scp2003.state === "closeScp2003"?null:<Scp2003V1 />}
                {scp2004.state === "closeScp2004"?null:<Scp2004V1 />}
                {scp2005.state === "closeScp2005"?null:<Scp2005V1 />}
                {scp2006.state === "closeScp2006"?null:<Scp2006V1 />}
                {scp2007.state === "closeScp2007"?null:<Scp2007V1 />}
                {scp2008.state === "closeScp2008"?null:<Scp2008V1 />}
                {scp2009.state === "closeScp2009"?null:<Scp2009V1 />}
                {scp2010.state === "closeScp2010"?null:<Scp2010V1 />}
                {scp2011.state === "closeScp2011"?null:<Scp2011V1 />}
                {scp2012.state === "closeScp2012"?null:<Scp2012V1 />}
                {scp2013.state === "closeScp2013"?null:<Scp2013V1 />}
                {scp2014.state === "closeScp2014"?null:<Scp2014V1 />}
                {scp2015.state === "closeScp2015"?null:<Scp2015V1 />}
                {scp2016.state === "closeScp2016"?null:<Scp2016V1 />}
                {scp2017.state === "closeScp2017"?null:<Scp2017V1 />}
                {scp2018.state === "closeScp2018"?null:<Scp2018V1 />}
                {scp2019.state === "closeScp2019"?null:<Scp2019V1 />}
                {scp2020.state === "closeScp2020"?null:<Scp2020V1 />}
                {inv.state === "closeInv"?null:<GrUnionAltaCerteza />}
                {per30Ampato.state === "closePer30Ampato"?null:<Per30Ampato />}
                {per30Apolobamba.state === "closePer30Apolobamba"?null:<Per30Apolobamba />}
                {per30Barroso.state === "closePer30Barroso"?null:<Per30Barroso />}
                {per30Blanca.state === "closePer30Blanca"?null:<Per30Blanca />}
                {per30Carabaya.state === "closePer30Carabaya"?null:<Per30Carabaya />}
                {per30Central.state === "closePer30Central"?null:<Per30Central />}
                {per30Chila.state === "closePer30Chila"?null:<Per30Chila />}
                {per30Chonta.state === "closePer30Chonta"?null:<Per30Chonta />}
                {per30Huagoruncho.state === "closePer30Huagoruncho"?null:<Per30Huagoruncho />}
                {per30Huallanca.state === "closePer30Huallanca"?null:<Per30Huallanca />}
                {per30Huanzo.state === "closePer30Huanzo"?null:<Per30Huanzo />}
                {per30Huayhuash.state === "closePer30Huayhuash"?null:<Per30Huayhuash />}
                {per30Huaytapallana.state === "closePer30Huaytapallana"?null:<Per30Huaytapallana />}
                {per30LaRaya.state === "closePer30LaRaya"?null:<Per30LaRaya />}
                {per30LaViuda.state === "closePer30LaViuda"?null:<Per30LaViuda />}
                {per30Otros.state === "closePer30Otros"?null:<Per30Otros />}
                {per30Raura.state === "closePer30Raura"?null:<Per30Raura />}
                {per30Urubamba.state === "closePer30Urubamba"?null:<Per30Urubamba />}
                {per30Vilcabamba.state === "closePer30Vilcabamba"?null:<Per30Vilcabamba />}
                {per30Vilcanota.state === "closePer30Vilcanota"?null:<Per30Vilcanota />}
                {per30Volcanica.state === "closePer30Volcanica"?null:<Per30Volcanica />}
                {per90Ampato.state === "closePer90Ampato"?null:<Per90Ampato />}
                {per90Apolobamba.state === "closePer90Apolobamba"?null:<Per90Apolobamba />}
                {per90Barroso.state === "closePer90Barroso"?null:<Per90Barroso />}
                {per90Blanca.state === "closePer90Blanca"?null:<Per90Blanca />}
                {per90Carabaya.state === "closePer90Carabaya"?null:<Per90Carabaya />}
                {per90Central.state === "closePer90Central"?null:<Per90Central />}
                {per90Chila.state === "closePer90Chila"?null:<Per90Chila />}
                {per90Chonta.state === "closePer90Chonta"?null:<Per90Chonta />}
                {per90Huagoruncho.state === "closePer90Huagoruncho"?null:<Per90Huagoruncho />}
                {per90Huallanca.state === "closePer90Huallanca"?null:<Per90Huallanca />}
                {per90Huanzo.state === "closePer90Huanzo"?null:<Per90Huanzo />}
                {per90Huayhuash.state === "closePer90Huayhuash"?null:<Per90Huayhuash />}
                {per90Huaytapallana.state === "closePer90Huaytapallana"?null:<Per90Huaytapallana />}
                {per90LaRaya.state === "closePer90LaRaya"?null:<Per90LaRaya />}
                {per90LaViuda.state === "closePer90LaViuda"?null:<Per90LaViuda />}
                {per90Otros.state === "closePer90Otros"?null:<Per90Otros />}
                {per90Raura.state === "closePer90Raura"?null:<Per90Raura />}
                {per90Urubamba.state === "closePer90Urubamba"?null:<Per90Urubamba />}
                {per90Vilcabamba.state === "closePer90Vilcabamba"?null:<Per90Vilcabamba />}
                {per90Vilcanota.state === "closePer90Vilcanota"?null:<Per90Vilcanota />}
                {per90Volcanica.state === "closePer90Volcanica"?null:<Per90Volcanica />}

            </MapContainer>
        </div>
    );
}