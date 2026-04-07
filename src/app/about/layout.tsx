'use client'
import { useState } from "react"
import Link from "next/link"

export default function AboutLayout({ children }: { children: React.ReactNode }) {

    const [count, setCount] = useState(0)

    return <div>
        <div>AboutLayoutHeader</div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <hr />
        {children}
        <div>AboutLayoutFooter</div>
        <Link href={{pathname: "/about/me", query: {name: "张三"}}} prefetch={true} scroll={true} replace={true}  className="text-blue-500 mr-2">me</Link> 
        <Link href="/about/me2?id=123&id=456" className="text-blue-500 mr-2">me2</Link>
    </div>
}