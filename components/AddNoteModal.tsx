import { useEffect, useState } from "react";

export default function AddNoteModal({
  onClose,
  onSave,
  initialData,
}: {
  onClose: () => void;
  onSave: (data: any) => void;
  initialData?: any;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  return (
    <div className="modal-bg">
      <div className="modal">
        <h3>{initialData ? "Edit Note" : "Add Note"}</h3>

        <input
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          value={content}
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={() => {
            onSave({ title, content });
            onClose();
          }}
        >
          {initialData ? "Update" : "Save"}
        </button>
      </div>
    </div>
  );
}
