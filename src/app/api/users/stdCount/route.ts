import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();
export async function GET(request: NextRequest) {
    try {
        const studentCount = await User.countDocuments();
        return NextResponse.json({ studentCount });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}