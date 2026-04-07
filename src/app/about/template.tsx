'use client'
import { useState } from "react"

export default function Template({ children }: { children: React.ReactNode }) {

    const [count, setCount] = useState(0)

    return <div>
        <div>TemplateLayoutHeader</div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <hr />
        {children}
        <div>TemplateLayoutFooter</div>
    </div>
}