import React from "react";
import { IconContext } from "react-icons";
import iconsConfig from "./config/icons";
import Button from "./components/Button";
import Card, { SelectableCardGroup } from "./components/Card";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { InputName } from "./components/Card/SelectableCardGroup/SelectableCardGroup";
import Input from "./components/Input";

function App() {
  const [selectedOption, setSelectedOption] = React.useState("");
  const handleSelectionChange = (inputName: InputName) => {
    setSelectedOption(inputName);
  };

  return (
    <IconContext.Provider value={iconsConfig}>
      <Input placeholder="Enter your name" />
    </IconContext.Provider>
  );
}

export default App;
