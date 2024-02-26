import connectMongoDB from "@/libs/mongodb";
import Scheme from "C:/Users/Shweta/hackplaksha/models/scheme.js";
import { NextResponse } from "next/server";
import User from "C:/Users/Shweta/hackplaksha/models/user.js";

export async function POST(req) {
    const { title, description } = await req.json();
    console.log("title", title);
    console.log("description", description);
    await connectMongoDB();
    // await Scheme.create({ title, description });
    // Create a new scheme document using Mongoose model
    const newScheme = new Scheme({
        title,
        description
    });

    // Save the new scheme document to the database
    await newScheme.save();
    return NextResponse.json({ message: "Scheme created."}, { status: 201});
}

export async function GET() {
    await connectMongoDB();
    const schemes = await Scheme.find();
    return NextResponse.json({schemes});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Scheme.findByIdAndDelete(id);
    return NextResponse.json({ message: "Scheme deleted."}, { status: 200});
}
  