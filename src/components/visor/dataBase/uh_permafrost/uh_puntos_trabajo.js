import React from 'react';
import {GeoJSON} from "react-leaflet";
import {useState, useEffect} from 'react';
import ReactDOMServer from 'react-dom/server';
import { Fragment } from "react";
import {app} from '../../../../../firebase.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../components/loading';

function PuntosTrabajo(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "uh_puntos_trabajo");
            return new Promise((resolve)=>{
                onValue(starCountCor, (snapshot) => {
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

    const blackOptionsPermafrost = {color:"white"}
    
    const Popup = ({ feature }) => {
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
          popupContent = feature.properties.popupContent;
        }
        return (
            <Fragment>
                <p>
                    <span className='font-bold'>Unidad hidrográfica:</span> {feature.properties.Unid_hidro}
                    <br></br>
                    <span className='font-bold'>Quebrada:</span> {feature.properties.Quebrada}
                    <br></br>
                    <span className='font-bold'>Referencia:</span> {feature.properties.Referencia}
                    <br></br>
                    <span className='font-bold'>Actividad:</span> {feature.properties.Actividad}<span>.</span>
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

    let MarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    
    const pointToLayer = (feature, latlng) => {
        return L.circleMarker(latlng, MarkerOptions);
    }

    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data} pointToLayer={pointToLayer} onEachFeature={onEachFeature} style={blackOptionsPermafrost}/>
            }
        </Fragment>
    );
}

export default React.memo(PuntosTrabajo);