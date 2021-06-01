import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './css/Profile.css';

import clienteAxios from '../../service/axios';
import { useParams } from 'react-router-dom';

import MyResume from '../../assets/pdf/Resume-AitorArina.pdf';


export default function Profile({ aitor }) {

    const { name, email, description, profilePicture, username, id } = aitor

    const [ skills, getSkills ] = useState([]);

    useEffect(() => {
        const getData = async () => {

            try {
                const respuesta = await clienteAxios.get('/skills');
                console.log(respuesta.data);

            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, []);

    return (
        <div className="profile-conatiner">
            <div className="profile-content-conatiner">

                <div className="profile-name-container">
                    <div className="">
                        <span className="name">{name}</span> <span className="mail">| <a href="mailto:aitorulz1gmail.com">{email}</a></span>
                    </div>
                </div>

                <div className="profile-desc-container">

                </div>

                <div className="profile-features-container">
                    <ul className="list-block">
                        <li>mongoose</li>
                        <li>express</li>
                        <li>react | hooks</li>
                    </ul>
                    <ul className="list-block">
                        <li>node</li>
                        <li>redux | context</li>
                        <li>NPM</li>
                    </ul>
                    <ul className="list-block">
                        <li>github</li>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                    </ul>
                    <ul className="list-block">
                        <li>wordpress</li>
                        <li>PSD</li>
                        <li>UX / UI</li>
                    </ul>
                </div>

                <div className="profile-buttons-container">
                    <div className="profile-button-container">
                        <div className="profile-button">
                            <Link to={'/studies'}><i class="far fa-arrow-alt-circle-left"></i> studies</Link>
                        </div>
                    </div>
                    <div className="profile-button-container">
                        <div className="profile-button">
                            <a href={MyResume} download="AitorArina|Resume.pdf">resume <i class="far fa-arrow-alt-circle-down"></i></a>
                        </div>
                    </div>
                    <div className="profile-button-container">
                        <div className="profile-button">
                            <Link to={'/jobs'}><i class="far fa-arrow-alt-circle-right"></i> experience</Link>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
