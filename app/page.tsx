"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import NoteCard from "@/components/NoteCard";
import AddNoteModal from "@/components/AddNoteModal";

export default function Home() {
  const [notes, setNotes] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingNote, setEditingNote] = useState<any>(null);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    setNotes(await res.json());
  };

  const saveNote = async (data: any) => {
    if (editingNote) {
      await fetch("/api/notes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, id: editingNote._id }),
      });
    } else {
      await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }

    setEditingNote(null);
    fetchNotes();
  };

  const deleteNote = async (id: string) => {
    await fetch(`/api/notes?id=${id}`, { method: "DELETE" });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container">
      <Navbar onAdd={() => setShowModal(true)} />

      <div className="grid">
        {notes.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
            onDelete={deleteNote}
            onEdit={(n) => {
              setEditingNote(n);
              setShowModal(true);
            }}
          />
        ))}
      </div>

      {showModal && (
        <AddNoteModal
          initialData={editingNote}
          onClose={() => {
            setShowModal(false);
            setEditingNote(null);
          }}
          onSave={saveNote}
        />
      )}
    </div>
  );
}
