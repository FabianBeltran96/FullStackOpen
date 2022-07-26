import { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'


const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }

  useEffect(hook, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const handleNoteChange = (event) => setNewNote(event.target.value)


  return (
    <div>
      <h1>Notes</h1>
      <ul> {notesToShow.map(note => (<Note key={note.id} note={note} ></Note>))} </ul>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>save</button>
      </form>

    </div>
  )
}

export default App