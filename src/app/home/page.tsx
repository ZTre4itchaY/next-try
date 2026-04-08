'use client'

import { useEffect } from "react"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

const checkLoginStatus = async() => {
    const res = await fetch('/api/login', { method: 'GET'})
    const data = await res.json()
    return data.code
}



export default function Home() {

    const router = useRouter()

    useEffect(() => {
        checkLoginStatus().then(code => {
            if(code !== 0){
                toast("登录态失效，正在返回登录页面")
                router.push('/login')
            }
        })
    }, [])

    return <div>登录成功，欢迎欢迎</div>
}