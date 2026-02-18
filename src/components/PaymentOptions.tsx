"use client";

import { useState } from "react";

export default function PaymentOptions() {
  const [method, setMethod] = useState("");

  const handlePayment = async () => {
    const response = await fetch("/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ method }),
    });

    const data = await response.json();

    if (method === "cash" || method === "mobilemoney") {
      alert("Payment recorded.");
    } else if (data.paymentUrl) {
      window.location.href = data.paymentUrl;
    } else {
      alert("Payment failed.");
    }
  };

  return (
    <div className="payment-options p-4 border rounded shadow-md max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-2">
        Choose Payment Method
      </h3>

      <select
        className="w-full p-2 border rounded mb-4"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value="">Select method</option>
        <option value="cash">Cash</option>
        <option value="mobilemoney">Mobile Money</option>
        <option value="card">Card</option>
      </select>

      <button
        onClick={handlePayment}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
}

