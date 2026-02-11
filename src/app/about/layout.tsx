'use client' //需要交互的地方要改为客户端组件 默认是服务端组件
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link" //引入Link组件
export default function AboutLayout({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0)
    const router = useRouter()
    const goRouterB = () => {
        router.push("/about/b", {})
    }
    return (
        <div>
            <h1>About 布局组件</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <h1>数量： {count}</h1>
            <hr />
            {children}

            <div>
                <Link href={{ pathname: "/about/a", query: {name: "张三"}}} className="text-blue-500">跳转About的A页面</Link>
            </div>
            <div>
                <button className="text-blue-500 cursor-pointer" onClick={goRouterB}>跳转About的B页面</button>
                {/* <Link href="/about/b" className="text-blue-500">跳转About的B页面</Link> */}
            </div>
        </div>
    )
}