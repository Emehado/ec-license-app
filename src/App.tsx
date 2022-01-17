import React from "react";
import { IconContext } from "react-icons";
import iconsConfig from "./config/icons";
import Button from "./components/Button";
import Card from "./components/Card";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

function App() {
  return (
    <IconContext.Provider value={iconsConfig}>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-between",
          height: 500,
          background: "brown",
          padding: "2rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <Card>
            <h1>This is the card heading</h1>
            <Button>
              <IoMdArrowRoundBack />
              Back
            </Button>
          </Card>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default App;
