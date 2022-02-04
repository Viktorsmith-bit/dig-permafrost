import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../../firebase/firebase.per90.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../../components/loading';

function Per90_La_Viuda(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountRef = ref(app, "per90_la_viuda");
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

    const colorOptionsPermafrost = (atribute)=>{
        return atribute === "0.5 - 0.6" ? '#47e5f1':
               atribute === "0.6 - 0.7" ? '#327efa':
               atribute === "0.7 - 0.8" ? '#1745b8':
               atribute === "0.8 - 0.9" ? '#9b1cf8':
               atribute === "0.9 - 1" ? '#eb27f8': null
    }

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
                    <span className='font-bold'>Probabilidad:</span> {feature.properties.Proba}
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
                            color:colorOptionsPermafrost(feature.properties.Proba),
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

export default React.memo(Per90_La_Viuda);