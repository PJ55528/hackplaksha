import connectMongoDB from "@/libs/mongodb";
import Scheme from "@/models/scheme";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle: title, newDescription: description} = await request.json();
    await connectMongoDB();
    await Scheme.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message: 'Scheme updated successfully'}, {status: 200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const scheme = await Scheme.findOne({_id: id});
    return NextResponse.json({scheme}, {status: 200});
}