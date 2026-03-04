import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactsList";
import Loader from "./Loader";

function App(){
  const [contacts, setContacts] = useState <
  {name: string ; phone: string}[]
  >([])

  const [loading, setLoading] = useState (true)

  useEffect (()=> {
    setTimeout(()=>{
      setContacts([
        {name: 'Juan Jose', phone: '3176151081'},
        {name: 'Pepito', phone: '3127221082'},
        {name: 'Maria', phone: '3156757180'},
        {name: 'Angela', phone: '3128907616'}
      ])
      setLoading(false)
    }, 2000)
  }, [])
  const addContact = (contact: {name: string ; phone: string }) => {
    setContacts(prev => [...prev, contact])
  }

  const deleteContact = (index: number ) => {
    setContacts(prev => prev.filter((_, i) => i !== index ))
  }
  if (loading) return <Loader/>
  return (
    <>
    <h1>Lista de Contactos</h1>
      <ContactForm addContact={addContact} />
      <ContactList 
        contacts={contacts} 
        deleteContact={deleteContact} 
      />
    </>
  )
}
export default App;
