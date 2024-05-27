import { connect } from "@/dbConfig/dbConfig";
import Lecturer from "@/models/lecturerModel"
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }) {
  const { id } = params;
  const { newFirstName: firstname, newLastName: lastname, newEmail: email, newPassword: password, newEmployeeNumber: employeeNumber } = await request.json();
  await connect();
  await Lecturer.findByIdAndUpdate(id, { firstname, lastname, email, password, employeeNumber });
  return NextResponse.json({ message: "Lecturer updated" }, { status: 200 });
}

export async function GET(request: any, { params }) {
  const { id } = params;
  await connect();
  const lecturer = await Lecturer.findOne({ _id: id });
  return NextResponse.json({ lecturer }, { status: 200 });
}