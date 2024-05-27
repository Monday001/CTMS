import Notification from "@/models/notificationModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();
export async function GET(request: NextRequest) {
    try {
        const noteCount = await Notification.countDocuments();
        return NextResponse.json({ noteCount });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}