'use client'
import { useState } from "react";
export default function AboutTemplate({children}: { children: React.ReactNode}){
    const [count, setCount] = useState(0)
    const handleAdd = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <div>Template 布局</div>
            <div>template计数 {count}</div>
            <div onClick={handleAdd}> + 1</div>
            <hr />
            {children}
        </div>
    )
}