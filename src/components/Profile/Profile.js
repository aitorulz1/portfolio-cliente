import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./css/Profile.css";

import clienteAxios from "../../service/axios";
import Skills from "./Skills";

import MyResume from "../../assets/pdf/Resume-AitorArina.pdf";

export default function Profile({ aitor }) {
  const { name, email, description, profilePicture, username, id } = aitor;

  const [skills, getSkills] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const respuesta = await clienteAxios.get("/skills");
        getSkills(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="profile-conatiner">
      <div className="profile-content-conatiner">
        <div className="profile-name-container">
          <div className="">
            <span className="name">{name}</span>{" "}
            <span className="mail">
              | <a href="mailto:aitorulz1gmail.com">{email}</a>
            </span>
          </div>
        </div>

        <div className="profile-desc-container">{description}</div>

        <div className="profile-features-container">
          <ul className="list-block">
            {skills.map((skill) => (
              <Skills key={skill.id} skill={skill} />
            ))}
          </ul>
        </div>

        <div className="profile-buttons-container">
          <div className="profile-button-container">
            <div className="profile-button">
              <Link to={"/studies"}>
                <i className="far fa-arrow-alt-circle-left"></i> studies
              </Link>
            </div>
          </div>
          <div className="profile-button-container">
            <div className="profile-button">
              <a href={MyResume} download="AitorArina|Resume.pdf">
                resume <i className="far fa-arrow-alt-circle-down"></i>
              </a>
            </div>
          </div>
          <div className="profile-button-container">
            <div className="profile-button">
              <Link to={"/jobs"}>
                <i className="far fa-arrow-alt-circle-right"></i> experience
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
