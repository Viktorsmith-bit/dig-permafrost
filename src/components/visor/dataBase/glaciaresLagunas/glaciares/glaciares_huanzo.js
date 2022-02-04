import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../../firebase/firebase.glaclagun.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../../components/loading';

function Glaciares_Huanzo(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountRef = ref(app, "glaciares_huanzo");
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

    const OptionsGlaciaresLagunas = {color:"#d5ecfd"}

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
                    <span className='font-bold'>Departamento:</span> {feature.properties.Depart}
                    <br></br>
                    <span className='font-bold'>Provincia:</span> {feature.properties.Prov}
                    <br></br>
                    <span className='font-bold'>Distrito:</span> {feature.properties.Dist}
                    <br></br>
                    <span className='font-bold'>Cordillera:</span> {feature.properties.Cordillera}
                    <br></br>
                    <span className='font-bold'>Área km<sup>2</sup>:</span> {feature.properties.Area_Km2}
                    <br></br>
                    <span className='font-bold'>Altura mínima:</span> {feature.properties.Alt_min}
                    <br></br>
                    <span className='font-bold'>Altura máxima:</span> {feature.properties.Alt_max}
                    <br></br>
                    <span className='font-bold'>Pendiente mínima:</span> {feature.properties.Pend_min}
                    <br></br>
                    <span className='font-bold'>Pendiente máxima:</span> {feature.properties.Pend_max}
                    <br></br>
                    <span className='font-bold'>Orientación:</span> {feature.properties.Orientacio}
                    <br></br>
                    <span className='font-bold'>Código de imagen:</span> {feature.properties.Cod_Imagen}
                    <br></br>
                    <span className='font-bold'>Latitud:</span> {feature.properties.Lat}
                    <br></br>
                    <span className='font-bold'>Longitud:</span> {feature.properties.Long}
                    <br></br>
                    <span className='font-bold'>X:</span> {feature.properties.X}
                    <br></br>
                    <span className='font-bold'>Y:</span> {feature.properties.Y}
                    <br></br>
                    <span className='font-bold'>Código glaciar:</span> {feature.properties.Cod_glac}
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
                data === undefined?<Loading />:<GeoJSON data={data} onEachFeature={onEachFeature} style={OptionsGlaciaresLagunas}  />
            }
        </Fragment>
    );
}

export default React.memo(Glaciares_Huanzo);