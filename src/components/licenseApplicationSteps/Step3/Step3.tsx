import React from "react";
import PageHeader from "../../Header";
import styled from "styled-components";
import useActions from "./actions";
import Card from "../../Card";
import BottomNavigation from "../../BottomNavigation";

const StyledListItem = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  margin-top: 2rem;
  @media (min-width: 1024px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Step1 = () => {
  const { stepStore, handleStepChange } = useActions();
  return (
    <div>
      <PageHeader
        step={3}
        title="Billing Details"
        subtitle="Confirm license details below and ensure the information matches your license information before proceeding to make payment. Payments are non-refundable."
      />
      <Card>
        <div>License Information</div>
        <hr />
        <StyledListItem>
          <strong>Name</strong>
          <div>{stepStore.billingDetails.name}</div>
        </StyledListItem>
        <StyledListItem>
          <strong>License type</strong>
          <div>{stepStore.billingDetails.licenseType.replaceAll("_", " ")}</div>
        </StyledListItem>
        <StyledListItem>
          <strong>License number</strong>
          <div>{stepStore.billingDetails.license}</div>
        </StyledListItem>
        <StyledListItem>
          <strong>Email</strong>
          <div>{stepStore.billingDetails.email}</div>
        </StyledListItem>
        <StyledListItem>
          <strong>Phone</strong>
          <div>{stepStore.billingDetails.phone}</div>
        </StyledListItem>

        <div style={{ marginTop: 30 }}>Checkout Information</div>
        <hr />
        <StyledListItem>
          <strong>Cost per annum</strong>
          <div>₵{stepStore.billingDetails.cost.toLocaleString("en-US")}</div>
        </StyledListItem>
        <StyledListItem>
          <strong>Year Count</strong>
          <div>{stepStore.billingDetails.years}</div>
        </StyledListItem>
        <StyledListItem>
          <strong>Total</strong>
          <div>₵{stepStore.renewalCost}</div>
        </StyledListItem>
        <BottomNavigation hasMargin onStepChange={handleStepChange} />
      </Card>
    </div>
  );
};

export default Step1;
