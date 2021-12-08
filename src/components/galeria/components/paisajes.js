import React from 'react';
import { useState } from 'react';
import { ListModelamiento } from '../../shared/galeria/listaJson/lista.galeria';
import ModalModelamiento from '../../shared/galeria/modal.modelamiento';

export default function Modelamiento(){
    const [state, setState] = useState({open:false});
    const [item, setItem] = useState({idItem:''});

    function openModal(e){
        e.preventDefault();
        setItem({
            idItem: e.target.id
        })
        setState({
            open:true
        })
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'hidden';
    }
    
    function closeModal(e){
        e.preventDefault();
        setState({open:false})
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'visible';
    }

    return(
        <div className='py-10'>
            {
                !state.open?null:<ModalModelamiento close={closeModal} idItem={item.idItem}/>
            }
            <div className='flex justify-center'>
                <div className='flex flex-1 justify-center lg:justify-start flex-wrap max-w-7xl gap-3'>
                    {
                        ListModelamiento.map((item)=>{
                            return <div className='galeria relative'>
                                <img id={item.id} onClick={openModal} className='cover galeria cursor-pointer rounded-md' src={`/galeria/${item.url}`} />
                                <div onClick={openModal} className='absolute bottom-0 left-0 opacity-image flex items-center px-4 h-16 w-full cursor-pointer rounded-b-md'>
                                    <h1 className='text-white'>{item.nombre}</h1>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}