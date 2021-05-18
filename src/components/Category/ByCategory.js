import React, { useState, useEffect } from 'react';
import clienteAxios from '../../service/axios';
import CategoryItems from './CategoryItems';

import { useParams } from 'react-router-dom';

import Sidebar from '../Layout/Sidebar';
import Topbar from '../Layout/Topbar';
import Rightbar from '../Layout/Rightbar';

import { Carousel } from '3d-react-carousal';

import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

import './css/ByCategory.css';



export default function ByCategory() {

    const [porcategorias, guardarPorCategorias] = useState([]);

    const [slider, guardarImagenSlides] = useState([]);

    const slides = (slider.map(el => el.productPicture))

    console.log(slides)

    // para pasar los parametros
    const { category } = useParams()


    useEffect(() => {
        const proyectosFiltrados = async () => {

            try {
                const respuesta = await clienteAxios.get(`/category/${category}`);
                console.log(respuesta.data);
                guardarPorCategorias(respuesta.data);

            } catch (error) {
                console.error(error);
            }
        }
        proyectosFiltrados();


        const slides = async () => {

            try {
                const respuestaSlides = await clienteAxios.get(`/category/${category}`);
                guardarImagenSlides(respuestaSlides.data);

            } catch (error) {
                console.error(error);
            }
        }
        slides();

    }, [category])








    return (



        <div className="main-container">

            <div className="left-area">

                <Sidebar />

            </div>

            <div className="middle-area">

                <Topbar />

                <div className="middle-container">

                    <StyleRoot>
                        <Coverflow
                            displayQuantityOfSide={3}
                            navigation
                            infiniteScroll
                            enableHeading        
                        >
                            

                            {porcategorias.map(porcategoria => (
                                <CategoryItems
                                    key={porcategoria.id}
                                    porcategoria={porcategoria}
                                />
                            ))}

                        </Coverflow>
                    </StyleRoot>



                </div>


            </div>


            <div className="right-area">

                <Rightbar />

            </div>
        </div>


    )

}
