import React, { Component } from 'react';
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
import GlaciaresAmpato from './dataBase/glaciaresLagunas/glaciares/glaciares_ampato';
import GlaciaresApolobamba from './dataBase/glaciaresLagunas/glaciares/glaciares_apolobamba';
import GlaciaresBlanca from './dataBase/glaciaresLagunas/glaciares/glaciares_blanca';
import GlaciaresCarabaya from './dataBase/glaciaresLagunas/glaciares/glaciares_carabaya';
import GlaciaresCentral from './dataBase/glaciaresLagunas/glaciares/glaciares_central';
import GlaciaresChila from './dataBase/glaciaresLagunas/glaciares/glaciares_chila';
import GlaciaresChonta from './dataBase/glaciaresLagunas/glaciares/glaciares_chonta';
import GlaciaresHuagoruncho from './dataBase/glaciaresLagunas/glaciares/glaciares_huagoruncho';
import GlaciaresHuallanca from './dataBase/glaciaresLagunas/glaciares/glaciares_huallanca';
import GlaciaresHuanzo from './dataBase/glaciaresLagunas/glaciares/glaciares_huanzo';
import GlaciaresHuayhuash from './dataBase/glaciaresLagunas/glaciares/glaciares_huayhuash';
import GlaciaresHuaytapallana from './dataBase/glaciaresLagunas/glaciares/glaciares_huaytapallana';
import GlaciaresLaRaya from './dataBase/glaciaresLagunas/glaciares/glaciares_la_raya';
import GlaciaresLaViuda from './dataBase/glaciaresLagunas/glaciares/glaciares_la_viuda';
import GlaciaresRaura from './dataBase/glaciaresLagunas/glaciares/glaciares_raura';
import GlaciaresUrubamba from './dataBase/glaciaresLagunas/glaciares/glaciares_urubamba';
import GlaciaresVilcabamba from './dataBase/glaciaresLagunas/glaciares/glaciares_vilcabamba';
import GlaciaresVilcanota from './dataBase/glaciaresLagunas/glaciares/glaciares_vilcanota';
import LagunasAmpato from './dataBase/glaciaresLagunas/lagunas/lagunas_ampato';
import LagunasApolobamba from './dataBase/glaciaresLagunas/lagunas/lagunas_apolobamba';
import LagunasBarroso from './dataBase/glaciaresLagunas/lagunas/lagunas_barroso';
import LagunasBlanca from './dataBase/glaciaresLagunas/lagunas/lagunas_blanca';
import LagunasCarabaya from './dataBase/glaciaresLagunas/lagunas/lagunas_carabaya';
import LagunasCentral from './dataBase/glaciaresLagunas/lagunas/lagunas_central';
import LagunasChila from './dataBase/glaciaresLagunas/lagunas/lagunas_chila';
import LagunasChonta from './dataBase/glaciaresLagunas/lagunas/lagunas_chonta';
import LagunasHuagoruncho from './dataBase/glaciaresLagunas/lagunas/lagunas_huagoruncho';
import LagunasHuallanca from './dataBase/glaciaresLagunas/lagunas/lagunas_huallanca';
import LagunasHuanzo from './dataBase/glaciaresLagunas/lagunas/lagunas_huanzo';
import LagunasHuayhuash from './dataBase/glaciaresLagunas/lagunas/lagunas_huayhuash';
import LagunasHuaytapallana from './dataBase/glaciaresLagunas/lagunas/lagunas_huaytapallana';
import LagunasLaRaya from './dataBase/glaciaresLagunas/lagunas/lagunas_la_raya';
import LagunasLaViuda from './dataBase/glaciaresLagunas/lagunas/lagunas_la_viuda';
import LagunasRaura from './dataBase/glaciaresLagunas/lagunas/lagunas_raura';
import LagunasUrubamba from './dataBase/glaciaresLagunas/lagunas/lagunas_urubamba';
import LagunasVilcabamba from './dataBase/glaciaresLagunas/lagunas/lagunas_vilcabamba';
import LagunasVilcanota from './dataBase/glaciaresLagunas/lagunas/lagunas_vilcanota';
import LagunasVolcanica from './dataBase/glaciaresLagunas/lagunas/lagunas_volcanica';

export default class MapViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            map:"1", state:"", stateOpen:true, panam:true, foto360:"close360", cor:"openCor", corBlanca:"openCorBlanca", corChila:"openCorChila",
            corPeru:"openCorPeru", puntosTrabajo:"openPuntosTrabajo", inv:"closeInv", scp2002:"closeScp2002", scp2003:"closeScp2003", scp2004:"closeScp2004",
            scp2005:"closeScp2005", scp2006:"closeScp2006", scp2007:"closeScp2007", scp2008:"closeScp2008", scp2009:"closeScp2009", scp2010:"closeScp2010",
            scp2011:"closeScp2011", scp2012:"closeScp2012", scp2013:"closeScp2013", scp2014:"closeScp2014", scp2015:"closeScp2015", scp2016:"closeScp2016",
            scp2017:"closeScp2017", scp2018:"closeScp2018", scp2019:"closeScp2019", scp2020:"closeScp2020",
            per30Ampato:"closePer30Ampato", per30Apolobamba:"closePer30Apolobamba", per30Barroso:"closePer30Barroso", per30Blanca:"closePer30Blanca",
            per30Carabaya:"closePer30Carabaya", per30Central:"closePer30Central", per30Chila:"closePer30Chila", per30Chonta:"closePer30Chonta",
            per30Huagoruncho:"closePer30Huagoruncho", per30Huallanca:"closePer30Huallanca", per30Huanzo:"closePer30Huanzo", per30Huayhuash:"closePer30Huayhuash",
            per30Huaytapallana:"closePer30Huaytapallana", per30LaRaya:"closePer30LaRaya", per30LaViuda:"closePer30LaViuda", per30Otros:"closePer30Otros",
            per30Raura:"closePer30Raura", per30Urubamba:"closePer30Urubamba", per30Vilcabamba:"closePer30Vilcabamba", per30Vilcanota:"closePer30Vilcanota",
            per30Volcanica:"closePer30Volcanica", per90Ampato:"closePer90Ampato", per90Apolobamba:"closePer90Apolobamba",
            per90Barroso:"closePer90Barroso", per90Blanca:"closePer90Blanca", per90Carabaya:"closePer90Carabaya", per90Central:"closePer90Central",
            per90Chila:"closePer90Chila", per90Chonta:"closePer90Chonta", per90Huagoruncho:"closePer90Huagoruncho", per90Huallanca:"closePer90Huallanca",
            per90Huanzo:"closePer90Huanzo", per90Huayhuash:"closePer90Huayhuash", per90Huaytapallana:"closePer90Huaytapallana", per90LaRaya:"closePer90LaRaya",
            per90LaViuda:"closePer90LaViuda", per90Otros:"closePer90Otros", per90Raura:"closePer90Raura", per90Urubamba:"closePer90Urubamba",
            per90Vilcabamba:"closePer90Vilcabamba", per90Vilcanota:"closePer90Vilcanota", per90Volcanica:"closePer90Volcanica",
            glacAmpato:"closeGlacAmpato", glacApolobamba:"closeGlacApolobamba", glacBlanca:"closeGlacBlanca", glacCarabaya:"closeGlacCarabaya", glacCentral:"closeGlacCentral", glacChila:"closeGlacChila", 
            glacChonta:"closeGlacChonta", glacHuagoruncho:"closeGlacHuagoruncho", glacHuallanca:"closeGlacHuallanca", glacHuanzo:"closeGlacHuanzo", glacHuayhuash:"closeGlacHuayhuash", glacHuaytapallana:"closeGlacHuaytapallana",
            glacLaRaya:"closeGlacLaRaya", glacLaViuda:"closeGlacLaViuda", glacRaura:"closeGlacRaura", glacUrubamba:"closeGlacUrubamba", glacVilcabamba:"closeGlacVilcabamba", glacVilcanota:"closeGlacVilcanota", 
            lagunAmpato:"closeLagunAmpato", lagunApolobamba:"closeLagunApolobamba", lagunBarroso:"closeLagunBarroso", lagunBlanca:"closeLagunBlanca", lagunCarabaya:"closeLagunCarabaya", lagunCentral:"closeLagunCentral",
            lagunChila:"closeLagunChila", lagunChonta:"closeLagunChonta", lagunHuagoruncho:"closeLagunHuagoruncho", lagunHuallanca:"closeLagunHuallanca", lagunHuanzo:"closeLagunHuanzo", lagunHuayhuash:"closeLagunHuayhuash",
            lagunHuaytapallana:"closeLagunHuaytapallana", lagunLaRaya:"closeLagunLaRaya", lagunLaViuda:"closeLagunLaViuda", lagunRaura:"closeLagunRaura", lagunUrubamba:"closeLagunUrubamba", lagunVilcabamba:"closeLagunVilcabamba",
            lagunVilcanota:"closeLagunVilcanota", lagunVolcanica:"closeLagunVolcanica"
        }
        this.openMap = this.openMap.bind(this);
        this.hundleClicOpen360 = this.hundleClicOpen360.bind(this);
        this.hundleClicClose360 = this.hundleClicClose360.bind(this);
        this.hundleClickEstadoVisor = this.hundleClickEstadoVisor.bind(this);
        this.hundleClickEstadoVisorPer30 = this.hundleClickEstadoVisorPer30.bind(this);
        this.hundleClickEstadoVisorPer90 = this.hundleClickEstadoVisorPer90.bind(this);
        this.hundleClickEstadoVisorGlac = this.hundleClickEstadoVisorGlac.bind(this);
        this.hundleClickEstadoVisorLagun = this.hundleClickEstadoVisorLagun.bind(this);
    }

    openMap(e){e.preventDefault(); this.setState({map:e.target.id})}
    hundleClicOpen360(e){e.preventDefault(); this.setState({state:e.target.id}); this.setState({stateOpen:false})}
    hundleClicClose360(e){e.preventDefault(); this.setState({stateOpen:true})}

    hundleClickEstadoVisor(e){
        e.preventDefault()
        return e.target.id === "openCor" || e.target.id === "closeCor"?this.setState({cor:e.target.id}):
        e.target.id === "openCorBlanca" || e.target.id === "closeCorBlanca"?this.setState({corBlanca:e.target.id}):
        e.target.id === "openCorChila" || e.target.id === "closeCorChila"?this.setState({corChila:e.target.id}):
        e.target.id === "openCorPeru" || e.target.id === "closeCorPeru"?this.setState({corPeru:e.target.id}):
        e.target.id === "openPuntosTrabajo" || e.target.id === "closePuntosTrabajo"?this.setState({puntosTrabajo:e.target.id}):
        e.target.id === "open360" || e.target.id === "close360"?this.setState({foto360:e.target.id}):
        e.target.id === "openScp2002" || e.target.id === "closeScp2002"?this.setState({scp2002:e.target.id}):
        e.target.id === "openScp2003" || e.target.id === "closeScp2003"?this.setState({scp2003:e.target.id}):
        e.target.id === "openScp2004" || e.target.id === "closeScp2004"?this.setState({scp2004:e.target.id}):
        e.target.id === "openScp2005" || e.target.id === "closeScp2005"?this.setState({scp2005:e.target.id}):
        e.target.id === "openScp2006" || e.target.id === "closeScp2006"?this.setState({scp2006:e.target.id}):
        e.target.id === "openScp2007" || e.target.id === "closeScp2007"?this.setState({scp2007:e.target.id}):
        e.target.id === "openScp2008" || e.target.id === "closeScp2008"?this.setState({scp2008:e.target.id}):
        e.target.id === "openScp2009" || e.target.id === "closeScp2009"?this.setState({scp2009:e.target.id}):
        e.target.id === "openScp2010" || e.target.id === "closeScp2010"?this.setState({scp2010:e.target.id}):
        e.target.id === "openScp2011" || e.target.id === "closeScp2011"?this.setState({scp2011:e.target.id}):
        e.target.id === "openScp2012" || e.target.id === "closeScp2012"?this.setState({scp2012:e.target.id}):
        e.target.id === "openScp2013" || e.target.id === "closeScp2013"?this.setState({scp2013:e.target.id}):
        e.target.id === "openScp2014" || e.target.id === "closeScp2014"?this.setState({scp2014:e.target.id}):
        e.target.id === "openScp2015" || e.target.id === "closeScp2015"?this.setState({scp2015:e.target.id}):
        e.target.id === "openScp2016" || e.target.id === "closeScp2016"?this.setState({scp2016:e.target.id}):
        e.target.id === "openScp2017" || e.target.id === "closeScp2017"?this.setState({scp2017:e.target.id}):
        e.target.id === "openScp2018" || e.target.id === "closeScp2018"?this.setState({scp2018:e.target.id}):
        e.target.id === "openScp2019" || e.target.id === "closeScp2019"?this.setState({scp2019:e.target.id}):
        e.target.id === "openScp2020" || e.target.id === "closeScp2020"?this.setState({scp2020:e.target.id}):
        e.target.id === "openInv" || e.target.id === "closeInv"?this.setState({inv:e.target.id}):null
    }

    hundleClickEstadoVisorPer30(e){
        e.preventDefault();
        return e.target.id === "openPer30Ampato" || e.target.id === "closePer30Ampato"?this.setState({per30Ampato:e.target.id}):
        e.target.id === "openPer30Apolobamba" || e.target.id === "closePer30Apolobamba"?this.setState({per30Apolobamba:e.target.id}):
        e.target.id === "openPer30Barroso" || e.target.id === "closePer30Barroso"?this.setState({per30Barroso:e.target.id}):
        e.target.id === "openPer30Blanca" || e.target.id === "closePer30Blanca"?this.setState({per30Blanca:e.target.id}):
        e.target.id === "openPer30Carabaya" || e.target.id === "closePer30Carabaya"?this.setState({per30Carabaya:e.target.id}):
        e.target.id === "openPer30Central" || e.target.id === "closePer30Central"?this.setState({per30Central:e.target.id}):
        e.target.id === "openPer30Chila" || e.target.id === "closePer30Chila"?this.setState({per30Chila:e.target.id}):
        e.target.id === "openPer30Chonta" || e.target.id === "closePer30Chonta"?this.setState({per30Chonta:e.target.id}):
        e.target.id === "openPer30Huagoruncho" || e.target.id === "closePer30Huagoruncho"?this.setState({per30Huagoruncho:e.target.id}):
        e.target.id === "openPer30Huallanca" || e.target.id === "closePer30Huallanca"?this.setState({per30Huallanca:e.target.id}):
        e.target.id === "openPer30Huanzo" || e.target.id === "closePer30Huanzo"?this.setState({per30Huanzo:e.target.id}):
        e.target.id === "openPer30Huayhuash" || e.target.id === "closePer30Huayhuash"?this.setState({per30Huayhuash:e.target.id}):
        e.target.id === "openPer30Huaytapallana" || e.target.id === "closePer30Huaytapallana"?this.setState({per30Huaytapallana:e.target.id}):
        e.target.id === "openPer30LaRaya" || e.target.id === "closePer30LaRaya"?this.setState({per30LaRaya:e.target.id}):
        e.target.id === "openPer30LaViuda" || e.target.id === "closePer30LaViuda"?this.setState({per30LaViuda:e.target.id}):
        e.target.id === "openPer30Otros" || e.target.id === "closePer30Otros"?this.setState({per30Otros:e.target.id}):
        e.target.id === "openPer30Raura" || e.target.id === "closePer30Raura"?this.setState({per30Raura:e.target.id}):
        e.target.id === "openPer30Urubamba" || e.target.id === "closePer30Urubamba"?this.setState({per30Urubamba:e.target.id}):
        e.target.id === "openPer30Vilcabamba" || e.target.id === "closePer30Vilcabamba"?this.setState({per30Vilcabamba:e.target.id}):
        e.target.id === "openPer30Vilcanota" || e.target.id === "closePer30Vilcanota"?this.setState({per30Vilcanota:e.target.id}):
        e.target.id === "openPer30Volcanica" || e.target.id === "closePer30Volcanica"?this.setState({per30Volcanica:e.target.id}):null
    }

    hundleClickEstadoVisorPer90(e){
        e.preventDefault();
        return  e.target.id === "openPer90Ampato" || e.target.id === "closePer90Ampato"?this.setState({per90Ampato:e.target.id}):
        e.target.id === "openPer90Apolobamba" || e.target.id === "closePer90Apolobamba"?this.setState({per90Apolobamba:e.target.id}):
        e.target.id === "openPer90Barroso" || e.target.id === "closePer90Barroso"?this.setState({per90Barroso:e.target.id}):
        e.target.id === "openPer90Blanca" || e.target.id === "closePer90Blanca"?this.setState({per90Blanca:e.target.id}):
        e.target.id === "openPer90Carabaya" || e.target.id === "closePer90Carabaya"?this.setState({per90Carabaya:e.target.id}):
        e.target.id === "openPer90Central" || e.target.id === "closePer90Central"?this.setState({per90Central:e.target.id}):
        e.target.id === "openPer90Chila" || e.target.id === "closePer90Chila"?this.setState({per90Chila:e.target.id}):
        e.target.id === "openPer90Chonta" || e.target.id === "closePer90Chonta"?this.setState({per90Chonta:e.target.id}):
        e.target.id === "openPer90Huagoruncho" || e.target.id === "closePer90Huagoruncho"?this.setState({per90Huagoruncho:e.target.id}):
        e.target.id === "openPer90Huallanca" || e.target.id === "closePer90Huallanca"?this.setState({per90Huallanca:e.target.id}):
        e.target.id === "openPer90Huanzo" || e.target.id === "closePer90Huanzo"?this.setState({per90Huanzo:e.target.id}):
        e.target.id === "openPer90Huayhuash" || e.target.id === "closePer90Huayhuash"?this.setState({per90Huayhuash:e.target.id}):
        e.target.id === "openPer90Huaytapallana" || e.target.id === "closePer90Huaytapallana"?this.setState({per90Huaytapallana:e.target.id}):
        e.target.id === "openPer90LaRaya" || e.target.id === "closePer90LaRaya"?this.setState({per90LaRaya:e.target.id}):
        e.target.id === "openPer90LaViuda" || e.target.id === "closePer90LaViuda"?this.setState({per90LaViuda:e.target.id}):
        e.target.id === "openPer90Otros" || e.target.id === "closePer90Otros"?this.setState({per90Otros:e.target.id}):
        e.target.id === "openPer90Raura" || e.target.id === "closePer90Raura"?this.setState({per90Raura:e.target.id}):
        e.target.id === "openPer90Urubamba" || e.target.id === "closePer90Urubamba"?this.setState({per90Urubamba:e.target.id}):
        e.target.id === "openPer90Vilcabamba" || e.target.id === "closePer90Vilcabamba"?this.setState({per90Vilcabamba:e.target.id}):
        e.target.id === "openPer90Vilcanota" || e.target.id === "closePer90Vilcanota"?this.setState({per90Vilcanota:e.target.id}):
        e.target.id === "openPer90Volcanica" || e.target.id === "closePer90Volcanica"?this.setState({per90Volcanica:e.target.id}):null
    }

    hundleClickEstadoVisorGlac(e){
        e.preventDefault();
        return e.target.id === "openGlacAmpato" || e.target.id === "closeGlacAmpato"?this.setState({glacAmpato:e.target.id}):
        e.target.id === "openGlacApolobamba" || e.target.id === "closeGlacApolobamba"?this.setState({glacApolobamba:e.target.id}):
        e.target.id === "openGlacBlanca" || e.target.id === "closeGlacBlanca"?this.setState({glacBlanca:e.target.id}):
        e.target.id === "openGlacCarabaya" || e.target.id === "closeGlacCarabaya"?this.setState({glacCarabaya:e.target.id}):
        e.target.id === "openGlacCentral" || e.target.id === "closeGlacCentral"?this.setState({glacCentral:e.target.id}):
        e.target.id === "openGlacChila" || e.target.id === "closeGlacChila"?this.setState({glacChila:e.target.id}):
        e.target.id === "openGlacChonta" || e.target.id === "closeGlacChonta"?this.setState({glacChonta:e.target.id}):
        e.target.id === "openGlacHuagoruncho" || e.target.id === "closeGlacHuagoruncho"?this.setState({glacHuagoruncho:e.target.id}):
        e.target.id === "openGlacHuallanca" || e.target.id === "closeGlacHuallanca"?this.setState({glacHuallanca:e.target.id}):
        e.target.id === "openGlacHuanzo" || e.target.id === "closeGlacHuanzo"?this.setState({glacHuanzo:e.target.id}):
        e.target.id === "openGlacHuayhuash" || e.target.id === "closeGlacHuayhuash"?this.setState({glacHuayhuash:e.target.id}):
        e.target.id === "openGlacHuaytapallana" || e.target.id === "closeGlacHuaytapallana"?this.setState({glacHuaytapallana:e.target.id}):
        e.target.id === "openGlacLaRaya" || e.target.id === "closeGlacLaRaya"?this.setState({glacLaRaya:e.target.id}):
        e.target.id === "openGlacLaViuda" || e.target.id === "closeGlacLaViuda"?this.setState({glacLaViuda:e.target.id}):
        e.target.id === "openGlacRaura" || e.target.id === "closeGlacRaura"?this.setState({glacRaura:e.target.id}):
        e.target.id === "openGlacUrubamba" || e.target.id === "closeGlacUrubamba"?this.setState({glacUrubamba:e.target.id}):
        e.target.id === "openGlacVilcabamba" || e.target.id === "closeGlacVilcabamba"?this.setState({glacVilcabamba:e.target.id}):
        e.target.id === "openGlacVilcanota" || e.target.id === "closeGlacVilcanota"?this.setState({glacVilcanota:e.target.id}):null
    }

    hundleClickEstadoVisorLagun(e){
        e.preventDefault();
        return e.target.id === "openLagunAmpato" || e.target.id === "closeLagunAmpato"?this.setState({lagunAmpato:e.target.id}):
        e.target.id === "openLagunApolobamba" || e.target.id === "closeLagunApolobamba"?this.setState({lagunApolobamba:e.target.id}):
        e.target.id === "openLagunBarroso" || e.target.id === "closeLagunBarroso"?this.setState({lagunBarroso:e.target.id}):
        e.target.id === "openLagunBlanca" || e.target.id === "closeLagunBlanca"?this.setState({lagunBlanca:e.target.id}):
        e.target.id === "openLagunCarabaya" || e.target.id === "closeLagunCarabaya"?this.setState({lagunCarabaya:e.target.id}):
        e.target.id === "openLagunCentral" || e.target.id === "closeLagunCentral"?this.setState({lagunCentral:e.target.id}):
        e.target.id === "openLagunChila" || e.target.id === "closeLagunChila"?this.setState({lagunChila:e.target.id}):
        e.target.id === "openLagunChonta" || e.target.id === "closeLagunChonta"?this.setState({lagunChonta:e.target.id}):
        e.target.id === "openLagunHuagoruncho" || e.target.id === "closeLagunHuagoruncho"?this.setState({lagunHuagoruncho:e.target.id}):
        e.target.id === "openLagunHuallanca" || e.target.id === "closeLagunHuallanca"?this.setState({lagunHuallanca:e.target.id}):
        e.target.id === "openLagunHuanzo" || e.target.id === "closeLagunHuanzo"?this.setState({lagunHuanzo:e.target.id}):
        e.target.id === "openLagunHuayhuash" || e.target.id === "closeLagunHuayhuash"?this.setState({lagunHuayhuash:e.target.id}):
        e.target.id === "openLagunHuaytapallana" || e.target.id === "closeLagunHuaytapallana"?this.setState({lagunHuaytapallana:e.target.id}):
        e.target.id === "openLagunLaRaya" || e.target.id === "closeLagunLaRaya"?this.setState({lagunLaRaya:e.target.id}):
        e.target.id === "openGLagunLaViuda" || e.target.id === "closeLagunLaViuda"?this.setState({lagunLaViuda:e.target.id}):
        e.target.id === "openLagunRaura" || e.target.id === "closeLagunRaura"?this.setState({lagunRaura:e.target.id}):
        e.target.id === "openLagunUrubamba" || e.target.id === "closeLagunUrubamba"?this.setState({lagunUrubamba:e.target.id}):
        e.target.id === "openLagunVilcabamba" || e.target.id === "closeLagunVilcabamba"?this.setState({lagunVilcabamba:e.target.id}):
        e.target.id === "openLagunVilcanota" || e.target.id === "closeLagunVilcanota"?this.setState({lagunVilcanota:e.target.id}):
        e.target.id === "openLagunVolcanica" || e.target.id === "closeLagunVolcanica"?this.setState({lagunVolcanica:e.target.id}):null
    }

    render(){
        return(
            <div className='h-screen border'>
                <Geoportal />
                <Creditos />
                <LeftAside />
                <Aside hundleClickEstadoVisor={this.hundleClickEstadoVisor} state={this.state} openMap={this.openMap}
                    hundleClickEstadoVisorPer30={this.hundleClickEstadoVisorPer30} hundleClickEstadoVisorPer90={this.hundleClickEstadoVisorPer90}
                    hundleClickEstadoVisorLagun={this.hundleClickEstadoVisorLagun} hundleClickEstadoVisorGlac={this.hundleClickEstadoVisorGlac}
                />
                {this.state.stateOpen?null:<Panoramicas hundleClicClose360={this.hundleClicClose360} state={this.state.state} />}
                <MapContainer center={[-12.114974922615183, -75.842071978681196]} zoom={6.5} scrollWheelZoom={true} >
                    {
                        this.state.map === "1"?<TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />:null
                    }
                    {
                        this.state.map === "2"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                        />:null
                    }
                    {
                        this.state.map === "3"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />:null
                    }
                    {
                        this.state.map === "4"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                        />:null
                    }
                    {
                        this.state.map === "5"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png"
                        />:null
                    }

                    {
                        this.state.map === "1"?<TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}"
                            ext='png'
                        />:null
                    }
                    {
                        this.state.map === "1"?<TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}"
                            ext='png'
                        />:null
                    }
        
                    {this.state.foto360 === "close360"?null:<Coordenadas360 hundleClicOpen360={this.hundleClicOpen360} />}
                    {this.state.cor === "openCor"?<CordillerasPeru />:null}
                    {this.state.corPeru === "openCorPeru"?<UhCordilleras />:null}
                    {this.state.corChila === "openCorChila"?<UhCordilleraChila />:null}
                    {this.state.corBlanca === "openCorBlanca"?<UhCordilleraBlanca />:null}
                    {this.state.puntosTrabajo === "openPuntosTrabajo"?<UhPuntosTrabajo />:null}
                    {this.state.scp2002 === "closeScp2002"?null:<Scp2002V1 />}
                    {this.state.scp2003 === "closeScp2003"?null:<Scp2003V1 />}
                    {this.state.scp2004 === "closeScp2004"?null:<Scp2004V1 />}
                    {this.state.scp2005 === "closeScp2005"?null:<Scp2005V1 />}
                    {this.state.scp2006 === "closeScp2006"?null:<Scp2006V1 />}
                    {this.state.scp2007 === "closeScp2007"?null:<Scp2007V1 />}
                    {this.state.scp2008 === "closeScp2008"?null:<Scp2008V1 />}
                    {this.state.scp2009 === "closeScp2009"?null:<Scp2009V1 />}
                    {this.state.scp2010 === "closeScp2010"?null:<Scp2010V1 />}
                    {this.state.scp2011 === "closeScp2011"?null:<Scp2011V1 />}
                    {this.state.scp2012 === "closeScp2012"?null:<Scp2012V1 />}
                    {this.state.scp2013 === "closeScp2013"?null:<Scp2013V1 />}
                    {this.state.scp2014 === "closeScp2014"?null:<Scp2014V1 />}
                    {this.state.scp2015 === "closeScp2015"?null:<Scp2015V1 />}
                    {this.state.scp2016 === "closeScp2016"?null:<Scp2016V1 />}
                    {this.state.scp2017 === "closeScp2017"?null:<Scp2017V1 />}
                    {this.state.scp2018 === "closeScp2018"?null:<Scp2018V1 />}
                    {this.state.scp2019 === "closeScp2019"?null:<Scp2019V1 />}
                    {this.state.scp2020 === "closeScp2020"?null:<Scp2020V1 />}
                    {this.state.inv === "closeInv"?null:<GrUnionAltaCerteza />}
                    {this.state.per30Ampato === "closePer30Ampato"?null:<Per30Ampato />}
                    {this.state.per30Apolobamba === "closePer30Apolobamba"?null:<Per30Apolobamba />}
                    {this.state.per30Barroso === "closePer30Barroso"?null:<Per30Barroso />}
                    {this.state.per30Blanca === "closePer30Blanca"?null:<Per30Blanca />}
                    {this.state.per30Carabaya === "closePer30Carabaya"?null:<Per30Carabaya />}
                    {this.state.per30Central === "closePer30Central"?null:<Per30Central />}
                    {this.state.per30Chila === "closePer30Chila"?null:<Per30Chila />}
                    {this.state.per30Chonta === "closePer30Chonta"?null:<Per30Chonta />}
                    {this.state.per30Huagoruncho === "closePer30Huagoruncho"?null:<Per30Huagoruncho />}
                    {this.state.per30Huallanca === "closePer30Huallanca"?null:<Per30Huallanca />}
                    {this.state.per30Huanzo === "closePer30Huanzo"?null:<Per30Huanzo />}
                    {this.state.per30Huayhuash === "closePer30Huayhuash"?null:<Per30Huayhuash />}
                    {this.state.per30Huaytapallana === "closePer30Huaytapallana"?null:<Per30Huaytapallana />}
                    {this.state.per30LaRaya === "closePer30LaRaya"?null:<Per30LaRaya />}
                    {this.state.per30LaViuda === "closePer30LaViuda"?null:<Per30LaViuda />}
                    {this.state.per30Otros === "closePer30Otros"?null:<Per30Otros />}
                    {this.state.per30Raura === "closePer30Raura"?null:<Per30Raura />}
                    {this.state.per30Urubamba === "closePer30Urubamba"?null:<Per30Urubamba />}
                    {this.state.per30Vilcabamba === "closePer30Vilcabamba"?null:<Per30Vilcabamba />}
                    {this.state.per30Vilcanota === "closePer30Vilcanota"?null:<Per30Vilcanota />}
                    {this.state.per30Volcanica === "closePer30Volcanica"?null:<Per30Volcanica />}
                    {this.state.per90Ampato === "closePer90Ampato"?null:<Per90Ampato />}
                    {this.state.per90Apolobamba === "closePer90Apolobamba"?null:<Per90Apolobamba />}
                    {this.state.per90Barroso === "closePer90Barroso"?null:<Per90Barroso />}
                    {this.state.per90Blanca === "closePer90Blanca"?null:<Per90Blanca />}
                    {this.state.per90Carabaya === "closePer90Carabaya"?null:<Per90Carabaya />}
                    {this.state.per90Central === "closePer90Central"?null:<Per90Central />}
                    {this.state.per90Chila === "closePer90Chila"?null:<Per90Chila />}
                    {this.state.per90Chonta === "closePer90Chonta"?null:<Per90Chonta />}
                    {this.state.per90Huagoruncho === "closePer90Huagoruncho"?null:<Per90Huagoruncho />}
                    {this.state.per90Huallanca === "closePer90Huallanca"?null:<Per90Huallanca />}
                    {this.state.per90Huanzo === "closePer90Huanzo"?null:<Per90Huanzo />}
                    {this.state.per90Huayhuash === "closePer90Huayhuash"?null:<Per90Huayhuash />}
                    {this.state.per90Huaytapallana === "closePer90Huaytapallana"?null:<Per90Huaytapallana />}
                    {this.state.per90LaRaya === "closePer90LaRaya"?null:<Per90LaRaya />}
                    {this.state.per90LaViuda === "closePer90LaViuda"?null:<Per90LaViuda />}
                    {this.state.per90Otros === "closePer90Otros"?null:<Per90Otros />}
                    {this.state.per90Raura === "closePer90Raura"?null:<Per90Raura />}
                    {this.state.per90Urubamba === "closePer90Urubamba"?null:<Per90Urubamba />}
                    {this.state.per90Vilcabamba === "closePer90Vilcabamba"?null:<Per90Vilcabamba />}
                    {this.state.per90Vilcanota === "closePer90Vilcanota"?null:<Per90Vilcanota />}
                    {this.state.per90Volcanica === "closePer90Volcanica"?null:<Per90Volcanica />}
                    
                    {this.state.glacAmpato === "closeGlacAmpato"?null:<GlaciaresAmpato />}
                    {this.state.glacApolobamba === "closeGlacApolobamba"?null:<GlaciaresApolobamba />}
                    {this.state.glacBlanca === "closeGlacBlanca"?null:<GlaciaresBlanca />}
                    {this.state.glacCarabaya === "closeGlacCarabaya"?null:<GlaciaresCarabaya />}
                    {this.state.glacCentral === "closeGlacCentral"?null:<GlaciaresCentral />}
                    {this.state.glacChila === "closeGlacChila"?null:<GlaciaresChila />}
                    {this.state.glacChonta === "closeGlacChonta"?null:<GlaciaresChonta />}
                    {this.state.glacHuagoruncho === "closeGlacHuagoruncho"?null:<GlaciaresHuagoruncho />}
                    {this.state.glacHuallanca === "closeGlacHuallanca"?null:<GlaciaresHuallanca />}
                    {this.state.glacHuanzo === "closeGlacHuanzo"?null:<GlaciaresHuanzo />}
                    {this.state.glacHuayhuash === "closeGlacHuayhuash"?null:<GlaciaresHuayhuash />}
                    {this.state.glacHuaytapallana === "closeGlacHuaytapallana"?null:<GlaciaresHuaytapallana />}
                    {this.state.glacLaRaya === "closeGlacLaRaya"?null:<GlaciaresLaRaya />}
                    {this.state.glacLaViuda === "closeGlacLaViuda"?null:<GlaciaresLaViuda />}
                    {this.state.glacRaura === "closeGlacRaura"?null:<GlaciaresRaura />}
                    {this.state.glacUrubamba === "closeGlacUrubamba"?null:<GlaciaresUrubamba />}
                    {this.state.glacVilcabamba === "closeGlacVilcabamba"?null:<GlaciaresVilcabamba />}
                    {this.state.glacVilcanota === "closeGlacVilcanota"?null:<GlaciaresVilcanota />}
                    
                    {this.state.lagunAmpato === "closeLagunAmpato"?null:<LagunasAmpato />}
                    {this.state.lagunApolobamba === "closeLagunApolobamba"?null:<LagunasApolobamba />}
                    {this.state.lagunBarroso === "closeLagunBarroso"?null:<LagunasBarroso />}
                    {this.state.lagunBlanca === "closeLagunBlanca"?null:<LagunasBlanca />}
                    {this.state.lagunCarabaya === "closeLagunCarabaya"?null:<LagunasCarabaya />}
                    {this.state.lagunCentral === "closeLagunCentral"?null:<LagunasCentral />}
                    {this.state.lagunChila === "closeLagunChila"?null:<LagunasChila />}
                    {this.state.lagunChonta === "closeLagunChonta"?null:<LagunasChonta />}
                    {this.state.lagunHuagoruncho === "closeLagunHuagoruncho"?null:<LagunasHuagoruncho />}
                    {this.state.lagunHuallanca === "closeLagunHuallanca"?null:<LagunasHuallanca />}
                    {this.state.lagunHuanzo === "closeLagunHuanzo"?null:<LagunasHuanzo />}
                    {this.state.lagunHuayhuash === "closeLagunHuayhuash"?null:<LagunasHuayhuash />}
                    {this.state.lagunHuaytapallana === "closeLagunHuaytapallana"?null:<LagunasHuaytapallana />}
                    {this.state.lagunLaRaya === "closeLagunLaRaya"?null:<LagunasLaRaya />}
                    {this.state.lagunLaViuda === "closeLagunLaViuda"?null:<LagunasLaViuda />}
                    {this.state.lagunRaura === "closeLagunRaura"?null:<LagunasRaura />}
                    {this.state.lagunUrubamba === "closeLagunUrubamba"?null:<LagunasUrubamba />}
                    {this.state.lagunVilcabamba === "closeLagunVilcabamba"?null:<LagunasVilcabamba />}
                    {this.state.lagunVilcanota === "closeLagunVilcanota"?null:<LagunasVilcanota />}
                    {this.state.lagunVolcanica === "closeLagunVolcanica"?null:<LagunasVolcanica />}
                </MapContainer>
            </div>
        );
    }    
}