import { useState, useContext } from "react";
import { getImgUrl } from "../../utils/BooksUtils";
import BookDetailsModal from "./BookDetailsModal";
import Ratings from "./Ratings";
import { BooksContext } from "../context";

export default function BookCard({ book }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectBook, setSelectBook] = useState(null);

  const { cartData, setCartData } = useContext(BooksContext);

  function handleAddToCart(e, book) {
    e.stopPropagation();

    const bookFound = cartData.find((item) => {
      return item.id === book.id;
    });

    if (!bookFound) {
      setCartData([...cartData, book]);
    } else {
      console.error("Book already in cart");
    }
  }

  function handleBookClick(book) {
    setIsModalOpen(true);
    setSelectBook(book);
  }
  function handleModalClose() {
    setIsModalOpen(false);
    setSelectBook(null);
  }
  return (
    <>
      {isModalOpen && (
        <BookDetailsModal
          book={selectBook}
          onClose={handleModalClose}
          onAddToCart={handleAddToCart}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl cursor-pointer">
        <div onClick={() => handleBookClick(book)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(book.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{book.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{book.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratings value={book.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              onClick={(e) => handleAddToCart(e, book)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${book.price} | Add to Cart</span>
            </a>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
