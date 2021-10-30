import { create } from "apisauce";

const api = create({
  baseURL: "https://codepilot-backend.herokuapp.com",
});

export const login = (email, password) => {
  api
    .post("/api/login", {
      email: email,
      password: password,
    })
    .then(async (resp) => {
      if (!resp.ok) {
        return false;
      }
    });

  return true;
};

export const getTopQuestions = () => {
  let data = null;
  api.get("/api/list").then(async (response) => {
    console.log(response);
    data = response.data;
  });

  return data;
};
