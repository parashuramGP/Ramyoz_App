export default function NoteCard({
  note,
  onDelete,
  onEdit,
}: {
  note: any;
  onDelete: (id: string) => void;
  onEdit: (note: any) => void;
}) {
  return (
    <div className="card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      <div className="actions">
        <button className="edit" onClick={() => onEdit(note)}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(note._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
