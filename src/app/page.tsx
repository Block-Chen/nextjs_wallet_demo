import Image from 'next/image'
"use client"; // This is a client component 👈🏽
import Link from "next/link";

export default function Home() {
  return (
    <body>
    <li><Link href={{pathname: '/wallet',}}>소유 지갑 리스트</Link></li>
    <li><Link href={{pathname: '/wallet/create',}}>지갑 생성</Link></li>
    <li><Link href={{pathname: '/wallet/balance',}}>지갑 잔액 확인</Link></li>
    <li><Link href={{pathname: '/wallet/balance/erc20',}}>지갑 토큰 잔액 확인</Link></li>
    <li><Link href={{pathname: '/wallet/balance/nft',}}>지갑 nft 확인</Link></li>
    <li><Link href={{pathname: '/wallet/send',}}>코인 전송</Link></li>
    <li><Link href={{pathname: '/wallet/send/erc20',}}>토큰 전송</Link></li>
    </body>
  )
}
