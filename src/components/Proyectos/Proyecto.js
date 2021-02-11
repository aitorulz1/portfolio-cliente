import React from 'react'

export default function Proyecto({proyecto}) {

    const {category, name} = proyecto;

    return (
        <div>
            {category}{name}
        </div>
    )
}
