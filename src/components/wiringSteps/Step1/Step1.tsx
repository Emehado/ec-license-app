import React from "react";
import PageHeader from "../../Header";
import { SelectableCardGroup } from "../../Card";
import styled from "styled-components";
import useActions from "./actions";
import BottomNavigation from "../../BottomNavigation";

const StyledRenderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > img {
    height: 78px;
    width: 78px;
    margin-bottom: 20px;
  }
`;

const Step1 = () => {
  const { options, handleSelectionChange, handleStepChange } = useActions();
  const renderItem = (input: any, index: number) => (
    <StyledRenderItem>
      <img src={input.image} alt={`${input.name} icon`} />
      <div>{input.title}</div>
    </StyledRenderItem>
  );
  return (
    <div>
      <PageHeader
        step={1}
        title="Select your preferred service type."
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        consequatur architecto, excepturi, beatae debitis, deserunt consectetur"
      />
      <SelectableCardGroup
        renderItem={renderItem}
        inputs={options}
        onSelectionChange={handleSelectionChange}
      />
      <BottomNavigation hasMargin onStepChange={handleStepChange} />
    </div>
  );
};

export default Step1;
