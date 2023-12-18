import { NextResponse, NextRequest } from 'next/server';

//지갑 리스트
export async function GET(request : NextRequest) {
    const { searchParams } = new URL(request.url)
    const api_token = process.env.NEXT_PUBLIC_BLOCKSDK_TOKEN
    const url = process.env.NEXT_PUBLIC_URL as string
    const net = process.env.NEXT_PUBLIC_NET

    const res = await fetch(url + net + `/address?api_token=` + api_token, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();

    return NextResponse.json({ data })
}