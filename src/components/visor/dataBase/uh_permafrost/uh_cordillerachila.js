import React from 'react';
import {GeoJSON} from "react-leaflet";
import {useState, useEffect} from 'react';
import { Fragment } from "react";
import {app} from '../../../../../firebase.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../components/loading';

function UhCordilleraChila(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "uh_cordillerachila");
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

    const blackOptionsPermafrost = {color:"yellow"}
    
    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data}  style={blackOptionsPermafrost} />
            }
        </Fragment>
    );
}

export default React.memo(UhCordilleraChila);