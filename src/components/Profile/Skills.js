import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryItems(skill) {

    const { skills, id } = skill;

    return(
        <div>
            <Link to={`/skills/${skill}`}>
                <li>{skills}</li>
            </Link>
        </div>
    )
}