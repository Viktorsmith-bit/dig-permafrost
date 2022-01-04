import { Fragment } from "react";
import {listaCoordenadas} from "./lista/listaJSON";
import {Marker, Popup} from "react-leaflet";
import {customMarkerIcon} from "../iconLocation";

export default function(props){

    return(
        <Fragment>
            {
                listaCoordenadas.map((item)=>{
                    return <Marker key={item.id} position={item.coordinates} icon={customMarkerIcon}>
                            <Popup>
                                <h1 id={item.id} onClick={props.hundleClicOpen360} className='cursor-pointer'>{item.nombre}</h1>
                        </Popup>
                    </Marker>
                })
            }
        </Fragment>
    );
}