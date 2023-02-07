import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Logo } from "./Components/Logo";

export function NavBar() {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "white" }}>
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button color="primary">test</Button>
            <Button color="primary">test</Button>
            <Logo />
            <Button color="primary">test</Button>
            <Button color="primary">test</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
