export default function Navbar({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="navbar">
      <h1>📝 Parshuram's Note</h1>
      <button className="add-btn" onClick={onAdd}>
        + Add Note
      </button>
    </div>
  );
}
