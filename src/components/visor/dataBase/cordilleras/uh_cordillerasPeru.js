import React from 'react';
import {GeoJSON, Marker} from "react-leaflet";
import {useState, useEffect} from 'react';
import ReactDOMServer from 'react-dom/server';
import { Fragment } from "react";
import {app} from '../../../../../firebase.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../components/loading';

function CordillerasPeru(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "cordilleras_peru");
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

    const blackOptionsPermafrost = {color:"black"}
    
    const Popup = ({ feature }) => {
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
          popupContent = feature.properties.popupContent;
        }
        return (
            <Fragment>
                <p>
                    <span className='font-bold'>Cordillera:</span> {feature.properties.cordillera}
                    <br></br>
                    <span className='font-bold'>Área (km2):</span> {feature.properties.Area_km2}
                </p>
            </Fragment>
        );
    };
    
    const onEachFeature = (feature, layer) => {
        const popupContent = ReactDOMServer.renderToString(
            <Popup feature={feature} />,
            <Marker feature={feature} />
        );
        layer.bindPopup(popupContent);
    };

    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data} onEachFeature={onEachFeature} style={blackOptionsPermafrost} />
            }
        </Fragment>
    );
}

export default React.memo(CordillerasPeru);