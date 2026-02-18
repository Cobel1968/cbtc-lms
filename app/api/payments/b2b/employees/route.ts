import { NextRequest, NextResponse } from 'next/server';
import { createEmployeesForBusiness } from "@/lib/payment/b2b";

export async function POST(req: NextRequest) {
    const { businessId, employeeList } = await req.json();
    try {
        const created = await createEmployeesForBusiness(businessId, employeeList);
        return NextResponse.json({ success: true, created });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}


