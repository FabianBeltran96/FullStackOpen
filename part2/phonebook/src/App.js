import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')

  const addNewName = (event) => {

    event.preventDefault()
    let foundPersons = persons.filter(element => element.name === newName);
    if (foundPersons.length) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([...persons, { name: newName }])
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <ul>
        {persons.map((person) => <li key={person.name}> {person.name}</li>)}
      </ul>
    </div >
  )
}

export default App