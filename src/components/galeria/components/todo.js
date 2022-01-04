import React from 'react';
import { useState } from 'react';
import ModalTodo from '../../shared/galeria/modal.todo';
import { listaTodo } from '../../shared/galeria/listaJson/lista.galeria';

export default function Socios(){
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
                !state.open?null:<ModalTodo close={closeModal} idItem={item.idItem}/>
            }
            
            <div className='flex justify-center'>
                <div className='flex flex-1 justify-center lg:justify-start flex-wrap w-full lg:max-w-7xl gap-3 px-4 lg:px-0'>
                    {
                        listaTodo.map((item)=>{
                            return <div className='galeria relative'>
                                <img id={item.id} onClick={openModal} className='cover galeria cursor-pointer' src={`${item.url}`} />
                                <div onClick={openModal} className='absolute bottom-0 left-0 opacity-image flex items-center px-4 h-16 w-full cursor-pointer'>
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