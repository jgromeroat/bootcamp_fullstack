import {Note} from './Note.js'
import {useState} from 'react'

function App(props) {
  
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true)

  if (typeof notes === 'undefined' || notes.length === 0){
    return "No existen notas que mostrar"
  }

  const handleChange = (event) =>{
    setNewNote (event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const newNoteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random < 0.5
    };

    setNotes (notes.concat(newNoteToAdd));
    setNewNote("");
  }

  const handleShowAll = (event) =>{
    setShowAll(() => !showAll);
  }
  
  return (
    <div>
      <h1>NOTES</h1>
      <button onClick = {handleShowAll} >{showAll ? "Show all":"Show only importants"}</button>
      <ol>
        {notes
        .filter(note => {
          if (showAll === true) return true
          else return note.important === true
        })
        .map(note =>( 
          <Note key = {note.id} id = {note.id} contenido={note.content} fecha = {note.date}/>
        ))}
      </ol> 
      <form onSubmit = {handleSubmit} >
        <input type ='text' onChange={handleChange} value ={newNote}/>
        <button>Crear Nota</button>
      </form>
    </div>
   
  );
}

export default App;
