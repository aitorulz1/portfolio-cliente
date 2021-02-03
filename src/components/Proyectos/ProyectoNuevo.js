import React, { Fragment, useState, useEffect } from 'react';
import clienteAxios from '../../service/axios';



export default function ProyectoNuevo({categories}) {
    
    const [ proyecto, guardarProyecto ] = useState({
        name:'',
        productPicture: null,
        category: '',
        description: '',
        begin: '',
        end: ''
    })
    

   



    return (
        <Fragment>

            <form>

                <input
                    className=""
                    type="text"
                    name='name'
                    placeholder=''
                    
                    
                />

                <select 
                    className=""
                    name='category'  
                >
                {!categories ? null : categories.map((category) => {
                    return <option 
                        key={category.id}
                        value={category}>
                            {category}
                        </option>
                })}

                </select>
                
            </form>
            
        </Fragment>

    )
}
