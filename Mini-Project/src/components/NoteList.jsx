function NoteList({ notes, remove, edit }) {
  return (
    <div className="notes">
      {notes.map((note) => (
        <div className="card" key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.description}</p>

          <button onClick={() => edit(note)}>Edit</button>
          <button onClick={() => remove(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;