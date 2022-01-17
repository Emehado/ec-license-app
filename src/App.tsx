import React from "react";
import { IconContext } from "react-icons";
import iconsConfig from "./config/icons";
import Button from "./components/Button";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

function App() {
  return (
    <IconContext.Provider value={iconsConfig}>
      <div style={{ background: "tomato" }}>
        <Button>
          <IoMdArrowRoundBack />
          Back
        </Button>
        <Button primary>
          Next <IoMdArrowRoundForward />
        </Button>
      </div>
    </IconContext.Provider>
  );
}

export default App;
