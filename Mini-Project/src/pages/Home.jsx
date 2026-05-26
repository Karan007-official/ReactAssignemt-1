import { useEffect, useState } from "react";

import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

import { getNotes, addNote, deleteNote, updateNote } from "../api/noteApi";

function Home() {
  const [notes, setNotes] = useState([]);
  const [editData, setEditData] = useState(null);

  const loadNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  // Save note (add or update)
  const saveNote = async (data) => {
    if (editData) {
      await updateNote(editData.id, data);
      setEditData(null);
    } else {
      await addNote(data);
    }

    loadNotes();
  };

  // Delete note
  const remove = async (id) => {
    await deleteNote(id);
    loadNotes();
  };

  // Edit note
  const edit = (note) => {
    setEditData(note);
  };

  return (
    <div>
      <h1>📝 Notes App</h1>

      <NoteForm saveNote={saveNote} editData={editData} />

      <NoteList notes={notes} remove={remove} edit={edit} />
    </div>
  );
}

export default Home;
