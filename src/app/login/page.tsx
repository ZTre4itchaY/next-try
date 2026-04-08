"use client";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async() => {
    await fetch("/api/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, password })
    }).then(res => res.json()).then(res => {
        console.log(res, "data")
        const { code, message } = res
        if(code === 0) {
            router.push('/home')
        }
        toast(message)
    })
    // console.log(data.json(), "data")
  }

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-md items-center px-4">
      <div className="w-full space-y-4 rounded-lg border p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Login</h1>
        <p className="text-sm text-muted-foreground">Enter your account info to continue.</p>
        <form className="space-y-3">
          <Input value={name} type="name" placeholder="Name" onChange={handleChangeName} />
          <Input value={password} type="password" placeholder="Password" onChange={handleChangePassword} />
          <Button onClick={handleSubmit} className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </main>
  );
}