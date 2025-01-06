import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { BooksContext } from "./components/context";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <BooksContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <MainContent />
        <Footer />
      </BooksContext.Provider>
    </>
  );
}

export default App;
