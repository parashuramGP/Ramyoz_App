import mongoose, { Schema, models } from "mongoose";

const NoteSchema = new Schema(
  {
    title: String,
    content: String,
  },
  { timestamps: true }
);

const Note = models.Note || mongoose.model("Note", NoteSchema);
export default Note;
