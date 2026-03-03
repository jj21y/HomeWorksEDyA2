interface Contact {
    name: string
    phone: string
}
interface Props {
    contacts: Contact[]
    deleteContact: (index: number) => void;
}

function ContactList({ contacts, deleteContact}: Props){
    return(
        <>
        <ul>
            {
                contacts.map((contact, index) => {
                return (
                    <li key={index}>
                        {contact.name} - {contact.phone}
                        <button onClick={() => deleteContact(index)}>
                            eliminar
                            </button>
                    </li>
            )
            })
            }
        </ul>
        </>
    );
}
export default ContactList;