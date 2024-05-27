import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


connect();

export async function POST(request: NextRequest) {
    try{
        const reqBody = await request.json()
        const { email, password} = reqBody

        console.log(reqBody)

        //check if user exists
        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error: "User doesn't exist"}, {status: 400})
        }

        //validate password
        const validPassword = await bcryptjs.compare(password, user.password);

        if(!validPassword){
            return NextResponse.json({error: "Password did not match"}, {status: 400})
        }

        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }

        console.log(tokenData)

        //create token
        const token = jwt.sign(tokenData, process.env.JTW_TOKEN_SECRET!, { expiresIn: "1d" })

        const response = NextResponse.json({
            message: "Login successfully",
            success: true,
            role: user.role,
        })

        response.cookies.set("token", token, {httpOnly: true})
        return response;
    }catch(error: any){
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

function session(arg0: { session: any; token: string; }) {
    throw new Error("Function not implemented.");
}
