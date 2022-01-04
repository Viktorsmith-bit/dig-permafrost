import React from 'react';
import {GeoJSON} from "react-leaflet";
import {useState, useEffect} from 'react';
import { Fragment } from "react";
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
        return atribute === "Activo" ? '#124b89':
               atribute === "Inactivo" ? '#6e00f5':
               atribute === "Intacto" ? '#03B2F1':
               atribute === "Relicto" ? '#999999':null
    }
    
    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data}  style={(feature)=>{
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