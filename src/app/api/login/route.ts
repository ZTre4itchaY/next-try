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

    }

}