import { NextResponse, NextRequest } from 'next/server';

//코인 잔액
export async function GET(request : NextRequest) {
    const { searchParams } = new URL(request.url)
    const api_token = searchParams.get('api_token')
    const address = searchParams.get('address')

    const res = await fetch(`https://testnet-api.blocksdk.com/v3/eth/address/`+ address +`/balance?api_token=` + api_token, {
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
//코인 전송
export async function POST(request : NextRequest) {
    const { searchParams } = new URL(request.url)
    const api_token = searchParams.get('api_token')
    const from = searchParams.get('from')
    const private_key = searchParams.get('private_key')
    const to = searchParams.get('to')
    const amount = searchParams.get('amount')

    const res = await fetch(`https://testnet-api.blocksdk.com/v3/eth/address/`+ from +`/send?api_token=` + api_token, {
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