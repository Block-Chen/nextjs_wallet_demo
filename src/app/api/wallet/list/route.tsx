import { NextResponse, NextRequest } from 'next/server';

//지갑 리스트
export async function GET(request : NextRequest) {
    const { searchParams } = new URL(request.url)
    const api_token = process.env.NEXT_PUBLIC_BLOCKSDK_TOKEN

    const res = await fetch(`https://testnet-api.blocksdk.com/v3/eth/address?api_token=` + api_token, {
        headers: {
            'Content-Type': 'application/json',
        },
        /*query:{
            api_token : 'jijlGRjpSm96WqpiUNt3J5C6ZHluVSpV7lgpOL7Q',
        },*/
    });
    const data = await res.json();

    return NextResponse.json({ data })
}