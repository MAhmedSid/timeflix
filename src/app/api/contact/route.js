import dbConn from "@/utils/dbConnection.js";
import Contact from "@/models/contact.js";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConn();
    console.log("db connected")
    await Contact.create(body);
    console.log("Contact created")
    
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
