import React, { useState } from "react";
import { Book } from "./Types";
import { Stack } from "./Stack";


const initialBooks: Book[] = [
    {
        name: 'The Lord Of the Rings: The Fellowship of the Ring',
        isbn: '978-0544003415',
        author: 'J.R.R. Tolkien',
        editorial: 'Houghton Mifflin Harcourt'
    },
    {
        name: 'The Lord of the Rings: The Two Towers',
        isbn: '978-0544003316',
        author: 'J.R.R. Tolkien',
        editorial: 'Houghton Mifflin Harcourt'
    },
    {
        name: 'The Lord of the Rings: The Return of the King',
        isbn: '978-0544003217',
        author: 'J.R.R. Tolkien',
        editorial: 'Houghton Mifflin Harcourt',
    },
    {
        name: 'The Hobbit',
        isbn: '978-0547928227',
        author: 'J.R.R. Tolkien',
        editorial: 'Houghton Mifflin Harcourt',
    }
];

const BooksStack: React.FC = () => {
  const [bookStack] = useState<Stack<Book>>(new Stack<Book>());
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [formData, setFormData] = useState<{
    name: string;
    isbn: string;
    author: string;
    editorial: string;
  }>({
    name: '',
    isbn: '',
    author: '',
    editorial: '',
  });

  // Initialize the stack with initialBooks
  React.useEffect(() => {
    initialBooks.forEach((book) => bookStack.push(book));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof formData
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleAddBook = () => {
    const newBook: Book = { ...formData };
    bookStack.push(newBook);
    setBooks([...books, newBook]);
    setFormData({ name: '', isbn: '', author: '', editorial: '' });
  };

  return (
    <div>
      <h1>Books Stack</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddBook();
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleInputChange(e, 'name')}
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={(e) => handleInputChange(e, 'isbn')}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => handleInputChange(e, 'author')}
          required
        />
        <input
          type="text"
          placeholder="Editorial"
          value={formData.editorial}
          onChange={(e) => handleInputChange(e, 'editorial')}
          required
        />
        <button type="submit">Add Book</button>
      </form>

      <h2>Books in Stack (LIFO order)</h2>
      <ul>
        {books.slice().reverse().map((book, index) => (
          <li key={index}>
            <strong>{book.name}</strong> by {book.author} (ISBN: {book.isbn}) - {book.editorial}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksStack;