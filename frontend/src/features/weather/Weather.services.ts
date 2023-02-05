import { weatherAPI } from "../../app/axios.interceptor";
import moment from "moment";
import queryString from "query-string";

const getAll = async (): Promise<any> => {
  // get your key from app.tomorrow.io/development/keys
  const apikey = "5oHEDs7mKspRXd9wkr99IzUrsfAL9Y1t";

  // pick the location, as a latlong pair
  let location = [42.38986606224565, -71.12305892074598];

  // list the fields
  const fields = [
    "precipitationIntensity",
    "precipitationType",
    "windSpeed",
    "windGust",
    "windDirection",
    "temperature",
    "temperatureApparent",
    "cloudCover",
    "cloudBase",
    "cloudCeiling",
    "weatherCode",
  ];

  // choose the unit system, either metric or imperial
  const units = "imperial";

  // set the timesteps, like "current", "1h" and "1d"
  const timesteps = ["current", "1h", "1d"];

  // configure the time frame up to 6 hours back and 15 days out
  const now = moment.utc();
  const startTime = moment.utc(now).add(0, "minutes").toISOString();
  const endTime = moment.utc(now).add(1, "days").toISOString();

  // specify the timezone, using standard IANA timezone format
  const timezone = "America/New_York";

  // request the timelines with all the query string parameters as options
  const getTimelineParameters = queryString.stringify(
    {
      location,
      apikey,
    },
    { arrayFormat: "comma" }
  );

  console.log(getTimelineParameters);

  return await weatherAPI.get("?" + getTimelineParameters);
};

export const weatherService = {
  getAll,
};
