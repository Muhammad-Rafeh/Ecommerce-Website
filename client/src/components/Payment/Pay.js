import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./payment.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51JSNV2Jz24te0UP60zvC2S2fwxl20cbsvs2391YkNRa5ZlPgb6cbaWRnARZo7ihTAm6Kdy7FcNSB8jd3XnDtCT6d00LYRD8s2n");
export default function Pay() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

