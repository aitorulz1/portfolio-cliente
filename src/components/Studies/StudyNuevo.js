import React, { useState, useContext } from "react";

import studyContext from "../../context/studies/studyContext";

import './css/StudyNuevo.css';

export default function StudyNuevo() {
  const studiesContext = useContext(studyContext);
  const { agregarStudy } = studiesContext;

  const [study, guardarStudy] = useState({
    school: "",
    grade: "",
    logo: "",
    description: "",
    learned: "",
    begin: "",
    end: "",
  });

  const { school, grade, logo, description, learned, begin, end } = study;

  const [error, guardarError] = useState(false);

  const onChange = (e) => {
    const { name, value, files } = e.target;
    guardarStudy({
      ...study,
      [name]: files ? files[0] : value,
    });
    // console.log(files&&files[0])
    // console.log(file)
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      (school.trim() === "") |
      (grade.trim() === "") |
      (description.trim() === "") |
      (learned.trim() === "") |
      (begin.trim() === "") |
      (end.trim() === "")
    ) {
      guardarError(true);
    }

    guardarError(false);

    // Cloudinary
    const data = new FormData();
    data.append("file", study.logo);
    data.append("upload_preset", "portfolio-aitor");
    data.append("cloud_name", "aitorcloud");
    fetch("https://api.cloudinary.com/v1_1/aitorcloud/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((file) => {
        // console.log(file.secure_url)
        // console.log(file)

        // Agrego el producto

        agregarStudy({
          school,
          grade,
          logo: file.secure_url,
          description,
          learned,
          begin,
          end,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    guardarStudy({
      school: "",
      grade: "",
      logo: "",
      description: "",
      learned: "",
      begin: "",
      end: "",
    });
  };

  return (
    <div className="proyect-form-container">
      <div className="proyect-form">

          <div className="title-container">
            New Study<i className="fas fa-graduation-cap"></i>
          </div>
      
        <form onSubmit={onSubmit} encType="multipart/form-data">

                <div className="cajetin-form">
            <input
              className="line-form"
              type="text"
              name="school"
              placeholder="Institution"
              value={school}
              onChange={onChange}
            />
          </div>

          <div className="cajetin-form">
            <input
              className="line-form"
              type="text"
              name="grade"
              placeholder="studies"
              value={grade}
              onChange={onChange}
            />
          </div>

          <div className="cajetin-form">
            <label className="custom-file-upload">
                Select File <i className="far fa-file"></i>
              <input
                className="line-form"
                type="file"
                name="logo"
                id="logo"
                placeholder="imagen"
                onChange={onChange}
              />
            </label>
          </div>

          <div className="cajetin-form">
            <input
              className="line-form"
              type="text"
              name="description"
              placeholder="description"
              value={description}
              onChange={onChange}
            />
          </div>

          <div className="cajetin-form">
            <input
              className="line-form"
              type="text"
              name="learned"
              placeholder="goals"
              value={learned}
              onChange={onChange}
            />
          </div>

          <div className="cajetin-form">
            <input
              className="line-form"
              type="date"
              name="begin"
              placeholder="incicio"
              value={begin}
              onChange={onChange}
            />
          </div>

          <div className="cajetin-form">
            <input
              className="line-form"
              type="date"
              name="end"
              placeholder="finalizado"
              value={end}
              onChange={onChange}
            />
          </div>

            <button className="form-button" type="submit" value="Subir Proyecto">
              <i className="fas fa-arrow-circle-up" alt="upload project"></i>
            </button>


        </form>
      </div>
    </div>
  );
}
