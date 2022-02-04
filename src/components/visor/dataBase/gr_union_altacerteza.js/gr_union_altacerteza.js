import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../firebase.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../components/loading';

function GrUnionAltaCerteza(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountRef = ref(app, "gr_union_altacerteza");
            return new Promise((resolve)=>{
                onValue(starCountRef, (snapshot) => {
                    const dbRef = snapshot.val();
                    resolve(dbRef.features)
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

    const colorOptions = (atribute)=>{
        return atribute === "Activo" ? '#124b89':
               atribute === "Inactivo" ? '#6e00f5':
               atribute === "Intacto" ? '#03B2F1':
               atribute === "Relicto" ? '#999999':null
    }

    const Popup = ({ feature }) => {
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
          popupContent = feature.properties.popupContent;
        }
        return (
            <div>
                <p>
                    <span className='font-bold'>Cordillera:</span> {feature.properties.Cordillera}
                    <br></br>
                    <span className='font-bold'>Área (ha):</span> {feature.properties.Area_ha}
                    <br></br>
                    <span className='font-bold'>Latitud:</span> {feature.properties.Latitud}
                    <br></br>
                    <span className='font-bold'>Longitud:</span> {feature.properties.Longitud}
                    <br></br>
                    <span className='font-bold'>Fecha digitilización:</span> {feature.properties.Fuente_fec}
                    <br></br>
                    <span className='font-bold'>Tipo:</span> {feature.properties.Tipo}
                    <br></br>
                    <span className='font-bold'>Actividad:</span> {feature.properties.Actividad}
                    <br></br>
                    <span className='font-bold'>Morfología:</span> {feature.properties.Morfologí}
                    <br></br>
                    <span className='font-bold'>Fuente imagen:</span> {feature.properties.Fuente_img}
                    <br></br>
                    <span className='font-bold'>Vertiente:</span> {feature.properties.Vertiente}
                </p>
            </div>
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
                data === undefined?<Loading />:<GeoJSON data={data} onEachFeature={onEachFeature} style={(feature)=>{
                    return {
                            color:colorOptions(feature.properties.Actividad)
                        }
                    }
                } />
            }
        </Fragment>
    );
}

export default React.memo(GrUnionAltaCerteza);