import React from "react";
import logo from "./logo.svg";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getTheme } from "./features/app/app.slice";
import { getWeatherRequest } from "./features/weather/weather.slice";
import { TrafficMapComponent } from "./features/traffic/TrafficMap.component";

function App() {
  const appTheme: any = useAppSelector(getTheme);
  const dispatch = useAppDispatch();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: appTheme,
        },
      }),
    [appTheme]
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button
          onClick={() => dispatch(getWeatherRequest("ttt"))}
          variant="contained"
        >
          Hello World
        </Button>
        <TrafficMapComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
