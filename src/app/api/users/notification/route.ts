import Notification from "@/models/notificationModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();



export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();
        const {

            lecturer,
            venue,
            unit,
            saa,
            detail,
        } = reqBody;

        console.log(reqBody);

        const newNotification = new Notification({
            lecturer,
            venue,
            unit,
            saa,
            detail,
        });

        console.log(newNotification);

        const savedNotification = await newNotification.save();
        console.log(savedNotification);

        return NextResponse.json({
            message: "Notification created successfully",
            success: true,
            status: 201,
            savedNotification,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


export async function GET(request: NextRequest) {
    try {
        const notify = await Notification.find();
        const rows = Array.isArray(notify) ? notify.map(note => note.toObject()) : [];
        return NextResponse.json(rows);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

  

export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { error: "User ID is required for deletion" },
                { status: 400 }
            );
        }

        const deletedUser = await Notification.findByIdAndDelete(id);

        if (!deletedUser) {
            return NextResponse.json(
                { error: "User not found for deletion" },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "User deleted" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error }, { status: 500 });
    }
}