import { useState } from "react";

interface Props {
    addContact: (contact: {name: string; phone: string}) => void;
}

function ContactForm ({ addContact}: Props ){

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleAdd = () => {
        addContact({name, phone });
        setName('')
        setPhone('')
    };

    return (
        <>
        <input
        placeholder = "Nombre:"
        value={name}
        onChange={e => setName (e.target.value)}
        />

        <input
        placeholder = "Telefono:"
        value = {phone}
        onChange={e => setPhone (e.target.value)}
        />
        <button onClick={handleAdd}>
            Agregar
            </button>
        </>
    )
}

export default ContactForm;