import React from "react";
import { IconContext } from "react-icons";
import iconsConfig from "./config/icons";
import styled, { ThemeProvider } from "styled-components";
import theme from "./config/theme";
import Stepper, { Step } from "./components/Stepper";

function App() {
  const steps = [
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
  ];
  const [activeStep, setActiveStep] = React.useState("3");
  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={iconsConfig}>
        <Stepper direction="horizontal">
          {steps.map((step) => (
            <Step
              active={activeStep === step.id}
              completed={activeStep >= step.id}
            >
              {step.label}
            </Step>
          ))}
        </Stepper>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
