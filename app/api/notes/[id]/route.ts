import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/Note";

export async function PUT(req: Request, { params }: any) {
  const body = await req.json();
  await connectDB();
  const updated = await Note.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: any) {
  await connectDB();
  await Note.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
