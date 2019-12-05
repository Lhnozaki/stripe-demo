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
// import Axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Message: "",
      success: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeErrorMsg = this.removeErrorMsg.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange = ({ error }) => {
    this.setState({ Message: "" });
    if (error) {
      this.setState({ Message: error.message });
    }
  };

  async handleSubmit(e) {
    e.preventDefault();

    let { error, token } = await this.props.stripe.createToken({
      name: "John Wick"
    });

    if (error) {
      this.setState({ Message: "Please input valid card" });
    } else {
      let response = await fetch("/api/charge", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: token.id
      });
      if (response.ok) console.log("Purchase Complete!");
      this.setState({
        Message: "Payment Successful!",
        success: !this.state.success
      });
    }
  }

  removeErrorMsg = () => {
    this.setState({ Message: "" });
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
                  {this.state.Message ? this.state.Message : ""}
                </div>
                <div className={styles.bt}>
                  <button>Pay</button>
                </div>
              </form>
            </div>
            <button onClick={this.handleClose} className={styles.close}>
              close
            </button>
          </>
        )}
      </div>
    );
  }
}

export default injectStripe(Form);
