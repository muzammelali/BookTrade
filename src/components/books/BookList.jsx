import { getAllBooks } from "../../data/Books";
import BookCard from "./BookCard";

export default function BookList() {
  const books = getAllBooks();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}
