import React from 'react';
import {GeoJSON} from "react-leaflet";
import {useState, useEffect} from 'react';
import ReactDOMServer from 'react-dom/server';
import { Fragment } from "react";
import {app} from '../../../../../firebase.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../components/loading';

function Scp2010V1(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountRef = ref(app, "scp_2010_v1");
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

    const colorOptions = (atribute)=>{
        return atribute === "10 - 81" ? '#d6d6ff':
               atribute === "81 - 152" ? '#8f97e3':
               atribute === "152 - 223" ? '#556cc9':
               atribute === "223 - 294" ? '#244ead':
               atribute === "294 - 365" ? '#003994':null
    }
    
    const Popup = ({ feature }) => {
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
          popupContent = feature.properties.popupContent;
        }
        return (
            <Fragment>
                <p>
                    <span className='font-bold'>Rango:</span> {feature.properties.Rangos}
                    <br></br>
                    <span className='font-bold'>Unidad:</span> {feature.properties.Unidad}
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
                data === undefined?<Loading />:<GeoJSON data={data} onEachFeature={onEachFeature} style={(feature)=>{
                    return {
                            color:colorOptions(feature.properties.Rangos),
                            weight: 0,
                            dashArray: '3',
                            fillOpacity: 0.5
                        }
                    }
                } />
            }
        </Fragment>
    );
}

export default React.memo(Scp2010V1);