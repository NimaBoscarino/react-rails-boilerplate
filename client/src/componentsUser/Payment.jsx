import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PaymentInputs(props) {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  return (
    <Popup trigger={<button> Confirm and Pay</button>} position="right center">
      <div>
        <PaymentInputsWrapper {...wrapperProps}>
          <svg {...getCardImageProps({ images })} />
          <input {...getCardNumberProps()} />
          <input {...getExpiryDateProps()} />
          <input {...getCVCProps()} />
          <button onClick={() => props.payRequest(props.index)}>Pay</button>
        </PaymentInputsWrapper>
      </div>
    </Popup>


  );
}
