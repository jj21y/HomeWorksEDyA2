import { useState } from "react";
import {BookForm} from "./BookForm";
import { Book } from "./Book";

import {Stack} from

function BooksStackPage() {
  const [stack] = useState(() => {
    const s = new Stack<Book>();
    MockBooks.forEach(b => s.push(b));
    return s;
  });

  const [books, setBooks] = useState<Book[]>(stack.print());

  const addBook = (book: Book) => {
    stack.push(book);
    setBooks([...stack.print()]);
  };

  return (
    <>
      <h2>Stack de Libros</h2>

      <BookForm onAddBook={addBook} />

      <BookList books={books} />
    </>
  );
}

export default BooksStackPage;