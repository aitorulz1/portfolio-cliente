import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryItems(skill) {

    const { skills, id } = skill.skill;
    console.log(skill)

    return(
        <li>
                <Link to={`/skills/${skills}`}>
                    {skills}
                </Link> 
        </li>
    )
}