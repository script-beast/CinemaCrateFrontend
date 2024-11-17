import React from "react";
import "./App.css";

import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import themeSettings from "./theme";

import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoutes from "./components/ProtectedRoutes";
import { Home } from "./screens";
import { StandardList, StandardSingle } from "./screens";
import { LimitedList, LimitedSingle } from "./screens";
import { PremiumList, PremiumSingle } from "./screens";
import { Page } from "./layouts";

function App() {
  const theme = React.useMemo(() => createTheme(themeSettings), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="" element={<Home />} />
          <Route path="standard">
            <Route path="" element={<StandardList />} />
            <Route path=":id" element={<StandardSingle />} />
          </Route>
          <Route path="limited">
            <Route path="" element={<LimitedList />} />
            <Route path=":id" element={<LimitedSingle />} />
          </Route>
          <Route path="premium">
            <Route path="" element={<PremiumList />} />
            <Route path=":id" element={<PremiumSingle />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={3000}
        pauseOnFocusLoss
        draggable
        stacked
      />
      <Backdrop id="sm-loader" sx={{ zIndex: 999999 }} open={false}>
        <CircularProgress color="primary" />
      </Backdrop>
    </ThemeProvider>
  );
}

export default App;
