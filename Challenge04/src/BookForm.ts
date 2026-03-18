import { useState } from "react";
import { Book } from "./Book";

interface Props {
  onAddBook: (book: Book) => void;
}

const initialState: Book = {
  name: "",
  isbn: "",
  author: "",
  editorial: ""
};

function BookForm({ onAddBook }: Props) {
  const [form, setForm] = useState<Book>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name as keyof Book]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.isbn || !form.author || !form.editorial) {
      alert("Todos los campos son obligatorios");
      return;
    }

    onAddBook(form);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
      <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} />
      <input name="author" placeholder="Autor" value={form.author} onChange={handleChange} />
      <input name="editorial" placeholder="Editorial" value={form.editorial} onChange={handleChange} />

      <button type="submit">Agregar Libro</button>
    </form>
  );
}

export default BookForm;