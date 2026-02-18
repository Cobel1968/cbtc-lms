import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

export async function createPaymentIntent(studentId: string, courseId: string, paymentMethod: string) {
    // TODO: calculate course price
    const amount = 10000; // in cents, example

    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: [paymentMethod],
        metadata: { studentId, courseId },
    });

    return paymentIntent;
}

export async function verifyPayment(paymentIntentId: string) {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return paymentIntent.status === 'succeeded';
}

