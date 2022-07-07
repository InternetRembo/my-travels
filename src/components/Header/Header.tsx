import {
  AppBar,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSearchQueryAC, stateType } from "../../redux/mainPageReducer";
import { CombinedState } from "redux";

const Header = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(
    (state: CombinedState<{ mainPageReducer: stateType }>) =>
      state.mainPageReducer.searchQuery
  );
  console.log(searchQuery);
  const onSearch = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    dispatch(GetSearchQueryAC(e.target.value));
  };

  return (
    <Box sx={{ flexGrow: 1 }} marginBottom="60px">
      <AppBar position="absolute">
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          padding="10px"
          height="50px"
        >
          <Typography
            variant="h5"
            noWrap
            component="text"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            My Travels
          </Typography>
          <TextField
            value={searchQuery}
            onChange={(e) => {
              onSearch(e);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            id="outlined-basic"
            variant="outlined"
            size={"small"}
            sx={{
              width: "400px",
              h: "20px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          />
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
