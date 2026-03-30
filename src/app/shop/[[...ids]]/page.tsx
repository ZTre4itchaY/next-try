
'use client'
import { useParams } from "next/navigation"
import { useSearchParams } from "next/navigation"
export default function ShopDetail(){
    const params = useParams()
    console.log(params, "params")
    const sp = useSearchParams()
    const name = sp.get('name')
    return (
        <div>
            <div>这是详情组件</div>
            <div>params: {params.id}</div>
            <div>这是name: {name}</div>
        </div>
    )
}