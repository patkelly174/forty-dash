import { weatherAPI } from "../../app/axios.interceptor";
import moment from "moment";
import queryString from "query-string";
import axios from "axios";

const getAll = async (): Promise<any> => {
  // get your key from app.tomorrow.io/development/keys
  const apikey = "5oHEDs7mKspRXd9wkr99IzUrsfAL9Y1t";

  // pick the location, as a latlong pair
  const location = [42.38986606224565, -71.12305892074598];

  //   return await weatherAPI.get(
  //     "?location=newyork&apikey=5oHEDs7mKspRXd9wkr99IzUrsfAL9Y1t"
  //   );
  axios
    .get(
      "https://api.tomorrow.io/v4/weather/forecast?location=42.38986606224565%2C%20-71.12305892074598&units=imperial&apikey=5oHEDs7mKspRXd9wkr99IzUrsfAL9Y1t"
    )
    .then(function (response) {
      console.log(response);
    });
};

export const weatherService = {
  getAll,
};
