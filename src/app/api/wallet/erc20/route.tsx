import { NextResponse, NextRequest } from 'next/server';

//지갑 erc20
export async function GET(request : NextRequest) {
    const { searchParams } = new URL(request.url)
    const api_token = process.env.NEXT_PUBLIC_BLOCKSDK_TOKEN
    const address = searchParams.get('address')

    const res = await fetch(`https://testnet-api.blocksdk.com/v3/eth/token/` + address +`/all-balance?api_token=` + api_token, {
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

    const payload = await request.json()
    const contract = payload.get('contract')
    const from = payload.get('from')
    const private_key = payload.get('private_key')
    const to = payload.get('to')
    const amount = payload.get('amount')

    const res = await fetch(`https://testnet-api.blocksdk.com/v3/eth/token/`+ contract + from +`/transfer?api_token=` + api_token, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            private_key: private_key,
            to : to,
            amount : amount,
        }),
    })

    const data = await res.json()

    return NextResponse.json({data})
}