'use client';

import PaymentOptions from "@/components/PaymentOptions";

export default function CheckoutPage() {
    const courseId = "COURSE456";
    const amount = 5000; // in cents
    const studentId = "STUDENT123";

    const handlePaymentSuccess = () => {
        alert('Payment successful! Thank you.');
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <PaymentOptions 
                studentId={studentId} 
                courseId={courseId} 
                amount={amount} 
                onPaymentSuccess={handlePaymentSuccess} 
            />
            <div className="flex justify-between mt-4">
                <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Back</button>
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Next</button>
            </div>
        </div>
    );
}

