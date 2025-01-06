import { getAllBooks } from "../../data/Books";

import BookCard from "./BookCard";

export default function BookList() {
  const movies = getAllBooks();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}
