import React from 'react';
import {GeoJSON} from "react-leaflet";
import {useState, useEffect} from 'react';
import { Fragment } from "react";
import {app} from '../../../../../firebase.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../components/loading';

function Permafrost90(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountRef = ref(app, "permafrost_90");
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

    const blackOptionsPermafrost = (atribute)=>{
        return atribute === "0.5 - 0.7" ? '#FFCE03':
               atribute === "0.7 - 0.9" ? '#FD6104':
               atribute === "0.9 - 1" ? '#F00505': null
    }
    
    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data}  style={(feature)=>{
                    return {
                            color:blackOptionsPermafrost(feature.properties.Probabilid),
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

export default React.memo(Permafrost90);
