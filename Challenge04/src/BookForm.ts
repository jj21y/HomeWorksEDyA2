import { useState } from "react";
import { Book } from "./Book"

interface Props {
  onAddBook: (book: Book) => void;
}

function BookForm({ onAddBook }: Props) {
  const [form, setForm] = useState<Book>({
    name: "",
    isbn: "",
    author: "",
    editorial: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBook(form);

    setForm({
      name: "",
      isbn: "",
      author: "",
      editorial: ""
    });
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