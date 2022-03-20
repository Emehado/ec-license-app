import React from "react";
import styled from "styled-components";

import useCurrentStepUpdater from "../../hooks/useCurrentStepUpdater";
import Card from "../../components/Card";
import successImg from "../../assets/images/success.svg";
import { observer } from "mobx-react-lite";

interface PaymentStatusProps {}

const StyledPaymentStatus = styled.div`
  & > .main {
    margin-top: 3rem;
  }
  .img {
    width: 281px;
    height: 326px;

    @media (min-width: 1024px) {
      width: 380px;
      height: 328px;
    }
  }
  .a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const PaymentStatus: React.FC<PaymentStatusProps> = () => {
  // const { stepStore } = useRootStore();
  const [paymentStatus, setPaymentStatus] = React.useState();
  const [loading, setLoading] = React.useState(true);

  useCurrentStepUpdater(2);

  return (
    <StyledPaymentStatus>
      <strong>Payment Confirmation</strong>
      <div className="main">
        <Card className="a">
          {loading ? (
            <p>Please wait, we are verifying your payment!...</p>
          ) : (
            <>
              <img className="img" src={successImg} alt="success" />
              <strong>Payment Status</strong>
              <p>
                Your payment has been processed successfully. You will receive a
                text message once your license has been renewed
              </p>
            </>
          )}
        </Card>
      </div>
    </StyledPaymentStatus>
  );
};

export default observer(PaymentStatus);
