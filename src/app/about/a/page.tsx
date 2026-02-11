'use client'
import { useState } from "react"
import { useSearchParams } from "next/navigation"
export default function A(){
    const [count, setCount] = useState(0)
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
    const handleAdd = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>这是A组件</h1>
            <div>{name}</div>
            <div>{count}</div>
            <button onClick={handleAdd}>+1</button>
        </div>
    )
}