import React, { useState, useContext } from "react";

import studyContext from "../../context/studies/studyContext";

export default function StudyNuevo() {
  const studiesContext = useContext(studyContext);
  const { agregarStudy } = studiesContext;

  const [study, guardarStudy] = useState({
    school: "",
    grade: "",
    logo: "",
    learned: "",
    begin: "",
    end: "",
  });

  const { school, grade, logo, learned, begin, end } = study;

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
      learned: "",
      begin: "",
      end: "",
    });
  };

  return (
    <div className="proyect-form-container">
      <div className="proyect-form">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          {/* {error ? 'Completa todos los campos' : null} */}

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
            <input
              className="line-form"
              type="file"
              name="logo"
              id="logo"
              placeholder="imagen"
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

          <div className="">
            <button className="" type="submit" value="Subir Proyecto">
              Subir Proyecto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
