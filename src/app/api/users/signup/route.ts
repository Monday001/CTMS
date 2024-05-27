import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";

connect();
let savedUser: any;

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      username,
      email,
      password,
      yearOfStudy,
      course,
      registrationNumber,
    } = reqBody;

    console.log(reqBody);

    //check if user exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exist" },
        { status: 400 }
      );
    }

    //hashing the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      yearOfStudy,
      course,
      registrationNumber,
      role: "STUDENT",
    });

    const adminPassword = await bcryptjs.hash("admin1234", salt); // Use a secure password
    const adminUser = new User({
      username: "Admin123",
      email: "admin123@gmail.com",
      password: adminPassword,
      employeeNumber: "TSC1234",
      role: "ADMIN",
    });

    savedUser = await newUser.save();
    const savedAdmin = await adminUser.save();
    console.log(savedUser);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      status: 201,
      savedUser,
      savedAdmin
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function GET(request: NextRequest){
  try {
    const users = await User.find();
    const rows = Array.isArray(users) ? users.map(user => user.toObject()) : [];
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

    const deletedUser = await User.findByIdAndDelete(id);

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