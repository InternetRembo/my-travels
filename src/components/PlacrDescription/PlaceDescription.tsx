import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Grid,
} from "@mui/material";
import React, { ChangeEvent, ReactNode, useState } from "react";
import PlaceCard from "./PlaceCard/PlaceCard";
import { useSelector } from "react-redux";
import { CombinedState } from "redux";
import { stateType } from "../../redux/mainPageReducer";

const PlaceDescription = () => {
  const places = useSelector(
    (state: CombinedState<{ mainPageReducer: stateType }>) =>
      state.mainPageReducer.placesData
  );
  const [selectedType, setSelectedType] = useState("restaurants");
  const [selectedRating, setSelectedRating] = useState("All");
  return (
    <Box>
      <Typography marginBottom="20px" variant="h4">
        Some {selectedType}
      </Typography>
      <Box>
        <Box display="flex" justifyContent="flexStart" flexDirection="column">
          <Box display="flex" flexDirection="row" justifyContent="flexStart">
            <Box width="130px" marginRight="20px">
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-label" color="secondary">
                  Action
                </InputLabel>
                <Select
                  color="secondary"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Action"
                  onChange={(event: SelectChangeEvent) =>
                    setSelectedType(event.target.value)
                  }
                >
                  <MenuItem value={"restaurants"}>Restaurants</MenuItem>
                  <MenuItem value={"hotels"}>Hotels</MenuItem>
                  <MenuItem value={"attractions"}>Attractions</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box width="130px">
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-label" color="secondary">
                  Rating
                </InputLabel>
                <Select
                  color="secondary"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Action"
                  onChange={(event: SelectChangeEvent) =>
                    setSelectedRating(event.target.value)
                  }
                >
                  <MenuItem value={0}>All</MenuItem>
                  <MenuItem value={1}>1 or more</MenuItem>
                  <MenuItem value={2}>2 or more</MenuItem>
                  <MenuItem value={3}>3 or more</MenuItem>
                  <MenuItem value={4}>4 or more</MenuItem>
                  <MenuItem value={4.5}>4.5 or more</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Grid
            container
            spacing={3}
            sx={{
              marginTop: "30px",
              height: "700px",
              width: "100%",
              backgroundColor: "red",
              padding: "10px",
              overflow: "auto",
            }}
          >
            {places?.map((el: { name: string }, i: number) => {
              return (
                <Grid item key={i} xs={12}>
                  <PlaceCard place={el} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PlaceDescription;
