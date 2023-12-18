"use client"; // This is a client component 👈🏽

import React, { useState, FormEvent } from 'react'

export default function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [body, setBody] = useState({
        from : "",
        private_key : "",
        to : "",
        amount : "",
        contract : "",
    });
    const [data, setData] = useState()

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        try {
            const formData = new FormData(event.currentTarget)
            const response = await fetch('/api/wallet/erc20', {
                method: 'POST',
                body: JSON.stringify({
                    from : body.from,
                    private_key : body.private_key,
                    to : body.to,
                    amount : body.amount,
                    contract : body.contract,
                }),
            }).then(response=>response.json()).then(data=>setData(data.data))

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
                <label htmlFor="Private Key">Private Key</label>
                <input className="border-2 border-gray-200  p-2"
                       type="text" name="private_key" value={body.private_key} onChange={(e) => {
                    setBody({ ...body,private_key:e.target.value });
                }}></input>
                <label htmlFor="Contract Address">Contract Address</label>
                <input className="border-2 border-gray-200  p-2"
                       type="text" name="contract" value={body.contract} onChange={(e) => {
                    setBody({ ...body,contract:e.target.value });
                }}></input>
                <label htmlFor="From">From</label>
                <input className="border-2 border-gray-200  p-2"
                       type="text" name="from" value={body.from} onChange={(e) => {
                    setBody({ ...body,from:e.target.value });
                }}></input>
                <label htmlFor="To">To</label>
                <input className="border-2 border-gray-200  p-2"
                       type="text" name="to" value={body.to} onChange={(e) => {
                    setBody({ ...body,to:e.target.value });
                }}></input>
                <label htmlFor="Amount">Amount</label>
                <input className="border-2 border-gray-200  p-2"
                       type="number" name="amount" value={body.amount} onChange={(e) => {
                    setBody({ ...body,amount: e.target.value });
                }}></input>
                <button  className="bg-black text-white text-sm font-medium p-2 rounded "
                         type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
            <h1>wallet token balance</h1>
            <pre className="p-2">{data ? JSON.stringify(data,null,3):''}</pre>
        </div>
    )
}