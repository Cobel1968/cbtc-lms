import { NextRequest, NextResponse } from 'next/server';
import { createB2BPayment } from "@/lib/payment/b2b";

export async function POST(req: NextRequest) {
    const { businessId, employeeList, courseIds, paymentMethod } = await req.json();

    try {
        const paymentResult = await createB2BPayment(businessId, employeeList, courseIds, paymentMethod);
        return NextResponse.json({ success: true, paymentResult });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}


