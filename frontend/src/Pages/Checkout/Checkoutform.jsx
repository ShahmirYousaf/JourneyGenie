// import React, { useEffect, useState } from "react";
// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import axios from "axios"; // Import axios for making HTTP requests
// import './checkout.css'; // Import checkout form styles



// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!stripe) {
//       return;
//     }

//     // Handle retrieval of clientSecret from URL params or backend
//     const clientSecret = new URLSearchParams(window.location.search).get(
//       "payment_intent_client_secret"
//     );

//     if (!clientSecret) {
//       return;
//     }

//     // Retrieve and handle paymentIntent status
//     stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
//       switch (paymentIntent.status) {
//         case "succeeded":
//           setMessage("Payment succeeded!");
//           break;
//         case "processing":
//           setMessage("Your payment is processing.");
//           break;
//         case "requires_payment_method":
//           setMessage("Your payment was not successful, please try again.");
//           break;
//         default:
//           setMessage("Something went wrong.");
//           break;
//       }
//     });
//   }, [stripe]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setIsLoading(true);

//     // Confirm payment with Stripe
//     const { error } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(PaymentElement),
//         billing_details: {
//           // Include billing details if needed (e.g., name, address)
//         },
//       },
//     });

//     if (error) {
//       setMessage(error.message);
//       setIsLoading(false);
//     } else {
//       setMessage("Payment successful!");
//       setIsLoading(false);
//     }
//   };

//   const paymentElementOptions = {
//     // Configure PaymentElement options (e.g., layout, style)
//     style: {
//       base: {
//         fontSize: '16px',
//         color: '#32325d',
//         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//         '::placeholder': {
//           color: '#aab7c4',
//         },
//       },
//     },
//   };

//   return (
//     <form id="payment-form" onSubmit={handleSubmit}>
//       <PaymentElement id="payment-element" options={paymentElementOptions} />
//       <button disabled={isLoading || !stripe || !elements} id="submit">
//         <span id="button-text">
//           {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
//         </span>
//       </button>
//       {/* Show any error or success messages */}
//       {message && <div id="payment-message">{message}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;


