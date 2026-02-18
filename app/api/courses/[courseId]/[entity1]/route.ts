import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({
    message: 'Dynamic API GET placeholder',
    id: params.id
  });
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({
    message: 'Dynamic API POST placeholder',
    id: params.id
  });
}
