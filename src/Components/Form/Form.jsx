import React, { Component } from "react";
import styles from "./Form.module.scss";
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PaymentRequestButtonElement,
  injectStripe
} from "react-stripe-elements";

class Form extends Component {
  render() {
    return (
      <div className={this.props.show ? styles.Modal : null}>
        {this.props.show && (
          <>
            {/* <CardElement /> */}
            <CardNumberElement />
            <CardExpiryElement />
            <CardCVCElement />
            <button onClick={this.props.close}>Close</button>
          </>
        )}
      </div>
    );
  }
}

export default injectStripe(Form);
