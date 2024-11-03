// src/pages/PaymentResultPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentResultPage() {
  const { state } = useLocation();
  const { success } = state;

  return (
    <div>
      <h1>{success ? "Payment Successful!" : "Payment Failed"}</h1>
      <p>{success ? "Thank you for your purchase." : "Please try again."}</p>
    </div>
  );
}

export default PaymentResultPage;
