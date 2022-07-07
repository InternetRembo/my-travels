import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PlaceDescription from "./components/PlacrDescription/PlaceDescription";
import Map from "./components/Map/Map";
import theme from "./common/theme";
import { GetPlacesTC } from "./redux/mainPageReducer";
import { useAppDispatch } from "./hooks/useAppDispatch";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(GetPlacesTC()).finally(() => setLoading(false));
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Header />
          <Grid container spacing={2} maxWidth="90vw" margin=" 0 auto">
            <Grid item xs={4}>
              {loading ? "LOADING" : <PlaceDescription />}
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
