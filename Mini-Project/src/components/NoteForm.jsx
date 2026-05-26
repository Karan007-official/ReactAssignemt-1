import { useState, useEffect } from "react";

function NoteForm({ saveNote, editData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editData) {
      setTitle(editData.title || "");
      setDescription(editData.description || "");
    }
  }, [editData]);

  const submit = () => {
    if (!title || !description) return;

    saveNote({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="form">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={submit}>Save Note</button>
    </div>
  );
}

export default NoteForm;