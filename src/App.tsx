import React from "react";
import RootStoreProvider from "./context/store";
import { IconContext } from "react-icons";
import iconsConfig from "./config/icons";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import theme from "./config/theme";
import NotFound from "./screens/NotFound";
// import PaymentStatus from "./screens/PaymentStatus";
import wiringRoute from "./routes/wiringRoute";
import licenseApplicationRoute from "./routes/licenseApplicationRoute";

function App() {
  return (
    <Router>
      <RootStoreProvider>
        <ThemeProvider theme={theme}>
          <IconContext.Provider value={iconsConfig}>
            <Toaster />
            <Routes>
              <Route path="/" element={<Outlet />}>
                {licenseApplicationRoute()}
                {wiringRoute()}
                {/* <Route path="/payment-status/:id" element={<PaymentStatus />} /> */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </IconContext.Provider>
        </ThemeProvider>
      </RootStoreProvider>
    </Router>
  );
}

export default App;
