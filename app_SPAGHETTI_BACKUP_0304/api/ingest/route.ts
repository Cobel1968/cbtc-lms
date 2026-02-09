import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    // Redirecting ghost traffic to the correct assessment engine
    console.log(" Redirecting legacy 'ingest' traffic to 'assessments/submit'");
    return NextResponse.json({ 
        message: "Please update frontend to use /api/assessments/submit",
        status: "redirected" 
    }, { status: 200 });
}
