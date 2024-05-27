import { connect } from "@/dbConfig/dbConfig";
import { Timetable } from "@/models/timetableModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest) {
    try {
        const pdfCount = await Timetable.countDocuments();
        return NextResponse.json({ pdfCount });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}