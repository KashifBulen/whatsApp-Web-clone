import React from "react";
import Background from "./Background";
import Foreground from "./Forground";
import CssBaseline from "@mui/material/CssBaseline";

import SideBar from "./SideBar";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        regular: {
          "@media (min-width: 600px)": {
            paddingLeft: "5px",
            paddingRight: "25px",
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
export default function Start() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Background>
        <Foreground>
          <SideBar />
        </Foreground>
      </Background>
    </ThemeProvider>
  );
}
