import React from "react";
import { Typography } from "@mui/material";

interface PlaceCardProps {
  place: {
    name: string;
  };
}

const PlaceCard = (props: PlaceCardProps) => {
  return (
    <div>
      <Typography variant="h4">{props.place.name}</Typography>
    </div>
  );
};

export default PlaceCard;
