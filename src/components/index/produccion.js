import Link from 'next/link';

export default function Produccion(){
    return(
        <div className='flex justify-center items-center lg:h-screen px-4 py-10 lg:px-0 lg:py-0 height-section'>
            <div className='flex flex-col items-center flex-1 w-full md:max-w-2xl lg:max-w-7xl w-full'>
                <h1 className='font-bold text-2xl lg:text-4xl text-color'>Productos</h1>
                <h1 className=''></h1>
                <div className='flex flex-wrap justify-center lg:justify-between gap-3 mt-8 lg:mt-16 w-full'>
                    <div className='content'>
                       <Link href='/equipo-cientifico/integrantes'><a><img className='w-full md:w-80 lg:w-96 md:h-56 lg:h-72 cover' src='/fondos/Equipo_cientifico.jpeg' /></a></Link>
                       <h1 className='mt-2 text-center text-color font-bold'>EQUIPO CIENTÍFICO</h1>
                    </div>
                    <div className='content'>
                        <Link href='/produccion/cientifica'>
                            <a><img className='w-full md:w-80 lg:w-96 md:h-56 lg:h-72 cover' src='/fondos/TrabajosCampo_Permafrost_2.jpeg' /></a>
                        </Link>
                        <h1 className='mt-2 text-center text-color font-bold'>PRODUCCIÓN CIENTÍFICA</h1>       
                    </div>
                    <div className='content'>
                        <Link href='/visor/mapa'><a><img className='w-full md:w-80 lg:w-96 md:h-56 lg:h-72 cover' src='/fondos/visor_de_mapas.jpeg' /> </a></Link>
                        <h1 className='mt-2 text-center text-color font-bold'>VISOR DE MAPAS</h1>
                    </div>
                </div>
                <Link href='/galeria'><a className='mt-7 lg:mt-14'><button className='w-56 py-4 border-color bg-color rounded-md text-color font-bold'>GALERÍA DE IMÁGENES</button></a></Link>
            </div>
        </div>
    );
}