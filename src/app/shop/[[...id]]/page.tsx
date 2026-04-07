'use client'
import { useParams } from "next/navigation"

export default function Shop(){
    const params = useParams()
    
    console.log(params, "params")
    return <div>shop</div>
}