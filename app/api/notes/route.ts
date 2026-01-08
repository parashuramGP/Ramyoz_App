import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Note from "../../../models/Note";

export async function GET() {
  await connectDB();
  const notes = await Note.find().sort({ createdAt: -1 });
  return NextResponse.json(notes);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const note = await Note.create(body);
  return NextResponse.json(note, { status: 201 });
}

export async function PUT(req: Request) {
  await connectDB();
  const { id, title, content } = await req.json();

  const updated = await Note.findByIdAndUpdate(
    id,
    { title, content },
    { new: true }
  );

  return NextResponse.json(updated);
}

export async function DELETE(req: Request) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await Note.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
