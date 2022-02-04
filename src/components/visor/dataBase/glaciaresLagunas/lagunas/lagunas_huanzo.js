import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../../firebase/firebase.glaclagun.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../../components/loading';

function Lagunas_Huanzo(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountRef = ref(app, "lagunas_huanzo");
            return new Promise((resolve)=>{
                onValue(starCountRef, (snapshot) => {
                    const dbRef = snapshot.val();
                    resolve(dbRef)
                })
            })
            .then((result)=>{
                setState(result)
            }).catch(()=>{
                console.log("Error al cargar los datos")
            })
        } 
        PromiseDB();
    }, [])

    const [data, setData] = useState();
    useEffect(()=>{
        function getStatic(){
            return setData(state)
        }
        getStatic();
    })

    const OptionsGlaciaresLagunas = {color:"#499285"}

    const Popup = ({ feature }) => {
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
          popupContent = feature.properties.popupContent;
        }
        return (
            <Fragment>
                <p>
                    <span className='font-bold'>ID:</span> {feature.properties.ID}
                    <br></br>
                    <span className='font-bold'>Número:</span> {feature.properties.Num}
                    <br></br>
                    <span className='font-bold'>Nombre:</span> {feature.properties.Nombre}
                    <br></br>
                    <span className='font-bold'>Departamento:</span> {feature.properties.Dep}
                    <br></br>
                    <span className='font-bold'>Provincia:</span> {feature.properties.Prov}
                    <br></br>
                    <span className='font-bold'>Distrito:</span> {feature.properties.Distr}
                    <br></br>
                    <span className='font-bold'>Cordillera:</span> {feature.properties.Cordillera}
                    <br></br>
                    <span className='font-bold'>Área km<sup>2</sup>:</span> {feature.properties.Area_Km2}
                    <br></br>
                    <span className='font-bold'>Área m<sup>2</sup>:</span> {feature.properties.Area_m2}
                    <br></br>
                    <span className='font-bold'>Código de imagen:</span> {feature.properties.Cod_Imagen}
                    <br></br>
                    <span className='font-bold'>Código de mapa:</span> {feature.properties.Cod_mapa}
                    <br></br>
                    <span className='font-bold'>Código de malla:</span> {feature.properties.Cod_malla}
                    <br></br>
                    <span className='font-bold'>Altitud:</span> {feature.properties.Altitud}
                    <br></br>
                    <span className='font-bold'>Latitud:</span> {feature.properties.Lat}
                    <br></br>
                    <span className='font-bold'>Longitud:</span> {feature.properties.Long}
                    <br></br>
                    <span className='font-bold'>X:</span> {feature.properties.X}
                    <br></br>
                    <span className='font-bold'>Y:</span> {feature.properties.Y}
                    <br></br>
                    <span className='font-bold'>Código laguna:</span> {feature.properties.Cod_lag}
                    <br></br>
                    <span className='font-bold'>Vertiente:</span> {feature.properties.Vert}
                </p>
            </Fragment>
        );
    };
    
    const onEachFeature = (feature, layer) => {
        const popupContent = ReactDOMServer.renderToString(
            <Popup feature={feature} />
        );
        layer.bindPopup(popupContent);
    };

    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data} onEachFeature={onEachFeature} style={OptionsGlaciaresLagunas}/>
            }
        </Fragment>
    );
}

export default React.memo(Lagunas_Huanzo);