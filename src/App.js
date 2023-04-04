import React from "react";
import { Box, ThemeProvider, Grid } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import JobCard from "./component/Job/JobCard";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar />

          <JobCard />
          <JobCard />
          <JobCard />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
