
'use client'
import { useParams } from "next/navigation"
export default function ShopDetail(){
    const params = useParams()
    console.log(params, "params")
    return (
        <div>
            <div>这是详情组件</div>
            <div>params: {params.id}</div>
        </div>
    )
}