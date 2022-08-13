import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([{ name: 'Fabian', number: '3165384974' }])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNewContact = (event) => {

    event.preventDefault()
    let foundPersons = persons.filter(element => element.name === newName);

    if (foundPersons.length) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([...persons, { name: newName, number: newNumber }])
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewContact}>
        <div> name: <input value={newName} onChange={handleNameChange} /> </div>
        <div> number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <p key={person.name}> {person.name} {person.number}</p>)}
    </div >
  )
}

export default App