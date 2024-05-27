import { connect } from "@/dbConfig/dbConfig";
import Lecturer from "@/models/lecturerModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest) {
    try {
        const lecturerCount = await Lecturer.countDocuments();
        return NextResponse.json({ lecturerCount });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
