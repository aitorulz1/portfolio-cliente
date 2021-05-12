import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile({aitor}) {

    const { name, email, description, profilePicture, username, id } = aitor

    console.log(aitor)

    return (
        <div>
            {name}
                <img src={profilePicture} />
            {email}
        </div>
    )
}
