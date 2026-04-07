'use client'
import { useSearchParams } from "next/navigation"

import { useRouter } from "next/navigation"

export default function Me2() {
    const searchParams = useSearchParams()
    const id = searchParams.getAll("id")
    const router = useRouter()
    return <div>Me2: {id.join(",")}
        <button onClick={() => router.push('/about/me?name=张三')}>跳转</button>
        <button onClick={() => router.replace("/page")}>替换当前页面</button>
        <button onClick={() => router.back()}>返回上一页</button>
        <button onClick={() => router.forward()}>跳转下一页</button>
        <button onClick={() => router.refresh()}>刷新当前页面</button>
        <button onClick={() => router.prefetch("/about")}>预获取about页面</button>
    </div>
}