import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040123456" },
    { name: "Ada Lovelace", number: "39445323523" },
    { name: "Dan Abramov", number: "1243234345" },
    { name: "Mary Poppendieck", number: "39236423122" },
  ])

  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setNewFilter] = useState("")

  const contactsToShow = filter
    ? persons.filter((person) => person.name.includes(filter))
    : persons

  const addNewContact = (event) => {
    event.preventDefault()
    let foundPersons = persons.filter((element) => element.name === newName)

    if (foundPersons.length) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([...persons, { name: newName, number: newNumber }])
      setNewName("")
      setNewNumber("")
    }
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
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
      <div>filter shown with:<input value={filter} onChange={handleFilterChange} /></div>
      <h2>Add a new </h2>
      <form onSubmit={addNewContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {contactsToShow.map((person) => (<p key={person.name}> {person.name} {person.number} </p>))}
    </div>
  )
}

export default App
