import React from 'react';
import { Link } from 'react-router-dom';

export default function BySkillsChild({ skillx }) {

    const { name, productPicture, category, linkto, description, end, begin, github, skill, id } = skillx;

    console.log(skillx)

    const shortDescr = description.slice(0, 70) + '...'

    const year = end.slice(0, 4);
    const month = end.slice(5, 7);
    const day = end.slice(8, 10);

    const date = `${day} · ${month} · ${year}`;

    return (
        <div className="project-container-regular">
            
            <div className="main-title-regular">
                {name}
            </div>

            <div className="image-container">
                <img src={productPicture} />
            </div>

            <div className="end-date">
                {date}
            </div>

            <div className="main-descr-regular">
                {shortDescr}
            </div>

            <div className="slider-container-button">

                <div className="button-container-ver">
                    <Link to={`/proyecto/${id}`}>
                        <i className="far fa-eye"></i>
                    </Link>
                </div>

            </div>


        </div>
    );
};
