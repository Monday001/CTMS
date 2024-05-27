import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid";
import PDFParser from "pdf2json";
import { connect } from "@/dbConfig/dbConfig";
import { Timetable } from "@/models/timetableModel";


connect();

export async function POST(req: NextRequest) {
  try {
    const formData: FormData = await req.formData();
    const uploadedFiles = formData.getAll("filepond");
    let fileName = "";
    let parsedText = "";

    if (uploadedFiles && uploadedFiles.length > 0) {
      const uploadedFile = uploadedFiles[1]; // Corrected index
      console.log("uploaded file:", uploadedFile)

      fileName = uuidv4();
      // const tempFilePath = `/tmp/${fileName}.pdf`;
      const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());
      // await fs.writeFile(tempFilePath, fileBuffer);

      // Create PDF details object
      const pdfDetails = await {
        size: uploadedFile.size,
        type: uploadedFile.type,
        name: uploadedFile.name,
        lastModified: uploadedFile.lastModified.toString(),
      };
      console.log("PDF Details:", pdfDetails);

      // Create a new instance of Timetable with PDF details

      const newPDF = new Timetable(pdfDetails);
      await newPDF.save();
      console.log("New PDF:", newPDF);


      // Send response
      const response = NextResponse.json({
        message: "User created successfully",
        success: true,
        status: 201,
        pdf: newPDF,
      });
      response.headers.set("FileName", fileName);
      return response; // Return the response here

    } else {
      console.log("No files found.");
    }
  } catch (error: any) {
    // Handle errors here
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // In case no files are found or the file is not in the expected format,
  // return an appropriate response outside the try-catch block
  return NextResponse.json({ error: "No files found or invalid format" }, { status: 400 });
}


export async function GET(request: NextRequest){
  try {
    const timetables = await Timetable.find();
    const rows = Array.isArray(timetables ) ? timetables .map(timetable => timetable.toObject()) : [];
    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const  id  = req.nextUrl.searchParams.get("id"); 

    // Check if id is provided
    if (!id) {
      return NextResponse.json({ error: "No id provided for deletion" }, { status: 400 });
    }

    // Find the timetable by id and delete it
    const deletedTimetable = await Timetable.findByIdAndDelete(id);

    if (!deletedTimetable) {
      return NextResponse.json({ error: "Timetable not found" }, { status: 404 });
    }

    // Send response with the deleted timetable
    return NextResponse.json({ message: "Timetable deleted successfully", deletedTimetable });
  } catch (error: any) {
    // Handle errors here
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

