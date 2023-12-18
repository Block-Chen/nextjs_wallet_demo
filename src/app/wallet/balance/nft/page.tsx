"use client"; // This is a client component 👈🏽

import React, { useState, FormEvent } from 'react'

export default function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [body, setBody] = useState({
        address : "",
        nft : "",
    });
    const [data, setData] = useState()

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        try {
            const formData = new FormData(event.currentTarget)
            if (body.nft=='erc721'){
                const response = await fetch('/api/wallet/erc721?&address=' + body.address , {
                    method: 'GET',
                }).then(response=>response.json()).then(data=>setData(data.data))
            }else {
                const response = await fetch('/api/wallet/erc1155?&address=' + body.address , {
                    method: 'GET',
                }).then(response=>response.json()).then(data=>setData(data.data))
            }

        } catch (error : any) {
            // Capture the error message to display to the user
            setError(error.message)
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={onSubmit} className="w-1/3 justify-center border-2 flex flex-col gap-4 m-4 p-2">
                <label htmlFor="NFT">NFT</label>
                <select className="border-2 border-gray-200  p-2"
                       name="nft" value={body.nft} onChange={(e) => {
                    setBody({ ...body,nft:e.target.value });
                }}>
                    <option value="">nft 선택</option>
                    <option value="erc721">erc721</option>
                    <option value="erc1155">erc1155</option>
                </select>
                <label htmlFor="Wallet Address">Wallet Address</label>
                <input className="border-2 border-gray-200  p-2"
                       type="text" name="address" value={body.address} onChange={(e) => {
                    setBody({ ...body,address:e.target.value });
                }}></input>
                <button  className="bg-black text-white text-sm font-medium p-2 rounded "
                         type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
            <h1>wallet nft list</h1>
            <pre className="p-2">{data ? JSON.stringify(data,null,3):''}</pre>
        </div>
    )
}