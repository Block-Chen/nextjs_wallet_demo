import { NextResponse, NextRequest } from 'next/server';

//지갑 erc20
export async function GET(request : NextRequest) {
    const { searchParams } = new URL(request.url)
    const api_token = process.env.NEXT_PUBLIC_BLOCKSDK_TOKEN
    const url = process.env.NEXT_PUBLIC_URL as string
    const net = process.env.NEXT_PUBLIC_NET
    const address = searchParams.get('address')

    const res = await fetch(url + net + `/token/` + address +`/all-balance?api_token=` + api_token, {
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
//erc20 전송
export async function POST(request : NextRequest) {
    const { searchParams } = new URL(request.url)
    const api_token = process.env.NEXT_PUBLIC_BLOCKSDK_TOKEN
    const url = process.env.NEXT_PUBLIC_URL as string
    const net = process.env.NEXT_PUBLIC_NET
    const payload = await request.json()

    const res = await fetch(url + net + `/token/`+ payload.contract + payload.from +`/transfer?api_token=` + api_token, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            private_key: payload.private_key,
            to : payload.to,
            amount : payload.amount,
        }),
    })

    const data = await res.json()

    return NextResponse.json({data})
}