'use client'
import { useState } from "react"
export default function B(){
    const [count, setCount] = useState(0)
    const handleAdd = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>这是B组件</h1>
            <div>{count}</div>
            <button onClick={handleAdd}>+1</button>
        </div>
    )
}