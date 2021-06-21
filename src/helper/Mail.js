import clienteAxios from "../service/axios";

export const sendMail = (data) => {
  return fetch(process.env.REACT_APP_API_URL, {
    method: "POST",
    headers: {
      Accept: "apllication/json",
      "Content-Type": "apllication/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
