import { NextResponse, NextRequest } from 'next/server';

//지갑 생성
export async function POST(request : NextRequest) {
    const { searchParams } = new URL(request.url)
    const api_token = process.env.NEXT_PUBLIC_BLOCKSDK_TOKEN

    const payload = await request.json()
    const name = payload.get('name')

    const res = await fetch(`https://testnet-api.blocksdk.com/v3/eth/address?api_token=` + api_token, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
    })

    const data = await res.json()

    return NextResponse.json({data})
}