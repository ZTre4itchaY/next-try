'use client'
import { useState } from "react"
import { useSearchParams } from "next/navigation"
export default function B(){
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const [count, setCount] = useState(0)
    const handleAdd = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>这是B组件 {id}</h1>
            <div>{count}</div>
            <button onClick={handleAdd}>+1</button>
        </div>
    )
}