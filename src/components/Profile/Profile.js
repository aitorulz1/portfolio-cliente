import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile({aitor}) {

    const { name, email, description, profilePicture, username } = aitor

    console.log(aitor)

    return (
        <div>
            {name}
            <Link to={`/editar/${username}`}>
                <button>
                    Editar
                </button>
            </Link>
        </div>
    )
}
