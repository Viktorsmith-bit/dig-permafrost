import Northumbria from './components/northumbria';
import React from 'react';

export default function Equipo(){
    return(
        <div className='flex justify-center'>
            <div className='flex-1 w-full md:max-w-3xl lg:max-w-7xl px-4 lg:px-0'>           
                <Northumbria />
            </div>
        </div>
    );
}