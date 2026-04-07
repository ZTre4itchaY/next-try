'use client'
import { useSearchParams } from "next/navigation"

export default function Me() {
    const searchParams = useSearchParams()

    const name = searchParams.get("name")

    return <div>Me: {name}</div>
}