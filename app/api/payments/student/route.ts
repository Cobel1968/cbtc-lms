import { NextRequest, NextResponse } from 'next/server';
import { createPaymentIntent, verifyPayment } from "@/lib/payment/payments";
import { requireAuth } from '@/lib/auth-route';

export async function POST(req: NextRequest) {
    const auth = await requireAuth();
    if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
    const body = await req.json();
    const { studentId, courseId, paymentMethod } = body;
    if (auth.user && auth.user.id !== studentId) {
        const adminOrSelf = auth.role === 'admin' || auth.role === 'lead_trainer';
        if (!adminOrSelf) return NextResponse.json({ error: 'Forbidden: cannot create payment for another user' }, { status: 403 });
    }
    try {
        // Create a payment intent
        const payment = await createPaymentIntent(studentId, courseId, paymentMethod);
        return NextResponse.json({ success: true, payment });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}


