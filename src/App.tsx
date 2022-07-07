import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import React, { Dispatch, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PlaceDescription from "./components/PlacrDescription/PlaceDescription";
import Map from "./components/Map/Map";
import theme from "./common/theme";
import { getPlacesData } from "./api";
import { useDispatch } from "react-redux";
import { GetPlacesAC, GetPlacesTC } from "./redux/mainPageReducer";
import { AnyAction } from "redux";
import { AppDispatch } from "./redux/redux-store";
import { useAppDispatch } from "./hooks/useAppDispatch";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetPlacesTC());
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Header />
          <Grid container spacing={2} maxWidth="90vw" margin=" 0 auto">
            <Grid item xs={4}>
              <PlaceDescription />
            </Grid>

            <Grid item xs={8}>
              <Map />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
