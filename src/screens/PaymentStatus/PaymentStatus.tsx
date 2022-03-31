import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import Card from '../../components/Card';
import successImg from '../../assets/images/success.svg';
import cancelImg from '../../assets/images/cancel.svg';
import useActions from './actions';

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
      height: 228px;
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
  const { paymentStatusCode, loading } = useActions();
  // 1 = Payment Approved
  // 2 = Payment Failed
  // 3 = No Payment Record
  // 4 = Payment Pending
  const statusCodeText = [
    'Your payment has been processed successfully. You will receive a text message once your license has been renewed',
    'Your payment has failed. Please try again.',
    'No payment record found. Please try again.',
    'Your payment is still pending.',
  ];

  return (
    <StyledPaymentStatus>
      <strong>Payment Confirmation</strong>
      <div className="main">
        <Card className="a">
          {loading ? (
            <p>Please wait, we are verifying your payment!...</p>
          ) : (
            <>
              <img
                className="img"
                src={paymentStatusCode === 1 ? successImg : cancelImg}
                alt="success"
              />
              <strong>Payment Status</strong>
              {/* {paymentStatusCode !== 1 ? (
                <p>
                  Sorry, your payment has <strong>not</strong> been confirmed
                  yet.
                </p>
              ) : (
                <p>
                  Your payment has been processed successfully. You will receive
                  a text message once your license has been renewed
                </p>
              )} */}
              <p>{statusCodeText[paymentStatusCode - 1]}</p>
            </>
          )}
        </Card>
      </div>
    </StyledPaymentStatus>
  );
};

export default observer(PaymentStatus);
