import React, { useEffect, useState } from 'react';
import './Node.css';

const getLocalStorage = () => {
  let notes = localStorage.getItem("notes");
  if (notes) {
    return JSON.parse(notes);
  } else {
    return [];
  }
};



const Note = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddNote = () => {
    if (!title) {
      alert('Title is required');
      return;
    }

    if (notes.some((note) => note.title === title)) {
      alert('A note with the same title already exists');
      return;
    }

    const newNote = { title, description };
    setNotes([...notes, newNote]);
    setTitle('');
    setDescription('');
  };

  const handleEditNote = (index) => {
    const noteToEdit = notes[index];
    setTitle(noteToEdit.title);
    setDescription(noteToEdit.description || '');
    setEditMode(true);
    setEditIndex(index);
  };

  const handleUpdateNote = () => {
    if (!title) {
      alert('Title is required');
      return;
    }

    if (notes.some((note, index) => index !== editIndex && note.title === title)) {
      alert('A note with the same title already exists');
      return;
    }

    const updatedNotes = [...notes];
    updatedNotes[editIndex] = { title, description };
    setNotes(updatedNotes);
    setTitle('');
    setDescription('');
    setEditMode(false);
    setEditIndex(null);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h2>Add/Edit/Delete Notes</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      {title.length < 10 && (
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
        </div>
      )}
      <div>
        {editMode ? (
          <button onClick={handleUpdateNote}>Update Note</button>
        ) : (
          <button onClick={handleAddNote}>Add Note</button>
        )}
      </div>
      <div className='width_first'> 
      <div className='width_second'>
        {notes.map((note, index) => (
          <div key={index}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button onClick={() => handleEditNote(index)}>Edit</button>
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Note;
