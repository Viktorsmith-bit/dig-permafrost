import { useState } from 'react';
import ModalCampo from '../shared/ambito/modal.campo';
import ModalModelamiento from '../shared/ambito/modal.modelamiento';
import React from 'react';

export default function Ambito(){
    const [state, setState] = useState({
        openCampo:false, 
        openModelamiento:false, 
    });

    const openModalCampo = (e)=>{
        e.preventDefault();
        setState({openCampo:true})
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'hidden';
    }
    const openModalModelamiento = (e)=>{
        e.preventDefault();
        setState({openModelamiento:true})
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'hidden';
    }

    const closeModal = (e)=>{
        e.preventDefault();
        setState({open:false})
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'visible';
    }
    return(
        <div id='ambito'>
            { !state.openCampo ? null: <ModalCampo closeModal={closeModal} />}
            { !state.openModelamiento ? null: <ModalModelamiento closeModal={closeModal} />}
            <div className='flex items-center items-center bg-gray-100 height-section'>
                <div className='flex-1'>
                    <img className='cover hidden lg:block height-section' src='/fondos/TrabajosModelamiento_Permafrost.jpeg' />
                </div>
                <div className='flex w-full lg:flex-1 justify-center px-4 lg:px-0 py-10 lg:py-0'>
                    <div className='w-full md:max-w-2xl lg:max-w-xl'>
                        <h1 className='text-2xl lg:text-4xl font-bold text-color'>Ámbito de estudio</h1>
                        <h1 className='text-base mt-5 text-justify text-color'>El modelamiento del permafrost se realizó en las 20 cordilleras glaciares del Perú. Mientras que, los trabajos de campo se desarrollaron en las cordilleras Blanca (Áncash) y Chila (Arequipa) para validación del modelamiento de permafrost.</h1>
                        <h1 className='text-base mt-5 text-justify text-color'>En la primera cordillera (Blanca) los trabajos de campo se desarrollaron dentro de las unidades hidrográficas Llullán, Ranrahirca, Casca, Quillcay y Yanayacu, donde, se instalaron sensores en las paredes de roca. Así mismo, en el glaciar cubierto de Kinzl y en la quebrada Quilcayhuanca se instalaron prototipos de estaciones meteorológicas. En la segunda cordillera (Chila), dentro del glaciar rocoso San Félix (unidad hidrográfica 134616), se realizaron trabajos de levantamiento de información base (climática, hidrológica, geofísica y cartográfica), y la instalación de sensores y equipos meteorológicos.</h1>
                        <div className='flex flex-wrap gap-3 mt-5'>
                            <button onClick={openModalModelamiento} className='border-color bg-color px-3 py-2 lg:py-3 text-base rounded-md text-color font-bold'>Área de modelamiento</button>
                            <button onClick={openModalCampo} className='border-color bg-color px-3 py-2 lg:py-3 text-base rounded-md text-color font-bold'>Área de trabajos de campo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}