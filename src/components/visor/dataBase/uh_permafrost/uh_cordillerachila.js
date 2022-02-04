import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../firebase.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../components/loading';

function UhCordilleraChila(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "uh_cordillera_chila");
            return new Promise((resolve)=>{
                onValue(starCountCor, (snapshot) => {
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

    const blackOptionsPermafrost = {color:"yellow"}
    
    const Popup = ({ feature }) => {
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
          popupContent = feature.properties.popupContent;
        }
        return (
            <Fragment>
                <p>
                    <span className='font-bold'>Cordillera:</span> {feature.properties.Cordillera}
                    <br></br>
                    <span className='font-bold'>Unidad hidrográfica:</span> {feature.properties.Nombre}
                    <br></br>
                    <span className='font-bold'>Actividad:</span> {feature.properties.Actividad}<span>.</span>
                    <br></br>
                    <span className='font-bold'>Área km<sup>2</sup>:</span> {feature.properties.Area_km2}
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
                data === undefined?<Loading />:<GeoJSON data={data} onEachFeature={onEachFeature} style={blackOptionsPermafrost} />
            }
        </Fragment>
    );
}

export default React.memo(UhCordilleraChila);