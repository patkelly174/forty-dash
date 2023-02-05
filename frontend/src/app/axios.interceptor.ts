import rootVars from "./root.vars";
import axios from "axios";

export const HTTP = axios.create({
  baseURL: rootVars.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const weatherAPI = axios.create({
  baseURL: "https://api.tomorrow.io/v4/weather/forecast",
  headers: {
    "Content-Type": "application/json",
  },
});
