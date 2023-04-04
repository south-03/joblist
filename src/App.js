import React from "react";
import { Box, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./component/Header";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};
