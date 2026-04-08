import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";

export async function POST(request: NextRequest){

    const { name, password } = await request.json()

    const cookieStore = await cookies()

    if(name === 'zyb' && password === '123456'){
        
        cookieStore.set('token', 'tokenValue', {
            maxAge: 60 * 60 * 24 * 10, // 10天的有效期
            httpOnly: true, // 是否只能服务端访问
        })

        return NextResponse.json({ code: 0, message: '登录成功' })

    } else {
        return NextResponse.json({ code: -1, message: '登录失败' })
    }
}

export async function GET(request: NextRequest){

    const cookieStore = await cookies()

    const token = cookieStore.get('token') 

    if(token && token.value === 'tokenValue'){
        return NextResponse.json({code: 0})
    }

    return NextResponse.json({code: -1})

}