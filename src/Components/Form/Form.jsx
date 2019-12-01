import React, { Component } from "react";
import styles from "./Form.module.scss";
import {
  CardElement,
  // CardNumberElement,
  // CardExpiryElement,
  // CardCVCElement,
  // PaymentRequestButtonElement,
  injectStripe
} from "react-stripe-elements";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeErrorMsg = this.removeErrorMsg.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange = ({ error }) => {
    if (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.props.stripe) {
      this.props.stripe.createToken().then(this.props.handleResult);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  removeErrorMsg = () => {
    this.setState({ errorMessage: "" });
  };

  handleClose = () => {
    this.removeErrorMsg();
    this.props.close();
  };

  //Card Element CSS
  createOptions = () => {
    return {
      style: {
        base: {
          fontSize: "20px",
          color: "#424770",
          fontFamily: "Open Sans, sans-serif",
          letterSpacing: "0.025em",
          backgroundColor: "white",
          lineHeight: "50px",
          "::placeholder": {
            color: "#aab7c4"
          },
          width: "100%",
          height: "100%",
          iconColor: "blue"
        },
        invalid: {
          color: "#c23d4b"
        },
        ":focus": {
          color: "#303238"
        }
      }
    };
  };

  render() {
    return (
      <div className={this.props.show ? styles.Modal : null}>
        {this.props.show && (
          <>
            <div className={styles.CardDemo}>
              <h3>Please enter your card details for payment</h3>
              <form onSubmit={this.handleSubmit}>
                <div className={styles.par}>
                  <CardElement
                    onChange={this.handleChange}
                    {...this.createOptions()}
                  />
                </div>
                <div className={styles.error} role="alert">
                  {this.state.errorMessage ? this.state.errorMessage : ""}
                </div>
                <div className={styles.bt}>
                  <button>Pay</button>
                </div>
              </form>
            </div>
            <button onClick={this.handleClose} className={styles.close}>
              X
            </button>
          </>
        )}
      </div>
    );
  }
}

export default injectStripe(Form);
