import React from "react";
import { IconContext } from "react-icons";
import iconsConfig from "./config/icons";
import Button from "./components/Button";
import Card, { SelectableCardGroup } from "./components/Card";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { InputName } from "./components/Card/SelectableCardGroup/SelectableCardGroup";

function App() {
  const [selectedOption, setSelectedOption] = React.useState("");
  const handleSelectionChange = (inputName: InputName) => {
    setSelectedOption(inputName);
  };

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
        <div style={{ flex: 1 }}>
          <Card>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <h1>Heading</h1>
            </div>
            <h2>Then some image here shaa</h2>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button primary>
                Next <IoMdArrowRoundForward />
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <SelectableCardGroup
          inputs={["apply", "renew"]}
          onSelectionChange={handleSelectionChange}
        />
      </div>
    </IconContext.Provider>
  );
}

export default App;
