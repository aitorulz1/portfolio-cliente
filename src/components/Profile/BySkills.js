import React, { useState, useEffect } from "react";
import clienteAxios from "../../service/axios";
import { useParams } from "react-router-dom";
import BySkillsChild from "./BySkillsChild";
import { Link } from "react-router-dom";

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import Rightbar from "../Layout/Rightbar";

export default function BySkills() {
  // para pasar los parametros
  const { skill } = useParams();

  const [getskills, getbySkills] = useState([]);

  useEffect(() => {
    const bySkills = async () => {
      try {
        const resultado = await clienteAxios.get(`/skills/${skill}`);
        getbySkills(resultado.data);
      } catch (error) {
        console.log(error);
      }
    };
    bySkills();
  }, []);

  return (
    <div className="main-container">
      <div className="left-area">
        <Sidebar />
      </div>

      <div className="middle-area">
        <Topbar />

        <div className="middle-container">
            <Link to={`/profile/aitor-arina`} className="back-to">
              <div className="arrow">
                <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
              </div>
              <div className="back-txt">go back</div>
            </Link>
          {getskills.map((skillx) => (
            <BySkillsChild key={skillx.id} skillx={skillx} />
          ))}
        </div>
      </div>

      <div className="right-area">
        <Rightbar />
      </div>
    </div>
  );
}
