import React from "react";
import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";
const Map = () => {
  const coordinates = { lat: 0, lng: 0 };
  return (
    <Box height="90vh" sx={{ backgroundColor: "pink" }}>
      {/*<GoogleMapReact*/}
      {/*  bootstrapURLKeys={{ key: "AIzaSyBJHAjNUPDhImjZ66P7Vk7LtbTvcdNaGME" }}*/}
      {/*  defaultCenter={coordinates}*/}
      {/*  center={coordinates}*/}
      {/*  defaultZoom={14}*/}
      {/*  margin={[10, 10, 10, 10]}*/}
      {/*  onChange={""}*/}
      {/*  onChildClick={""}*/}
      {/*  options={""}*/}
      {/*></GoogleMapReact>*/}
    </Box>
  );
};

export default Map;
