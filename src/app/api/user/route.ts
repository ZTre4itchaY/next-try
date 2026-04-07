import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams

    const id = searchParams.get("id")

    const name = searchParams.get("name")

    return NextResponse.json({
        code: 0, 
        data: {
            id,
            name
        }
    })

}