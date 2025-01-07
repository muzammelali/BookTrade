import { useReducer, useState } from "react";
import "./App.css";
import { BooksContext, ThemeContext } from "./components/context";
import { cartReducer, initialState } from "./components/reducer/CartReducer";
import Page from "./page";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BooksContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer autoClose={2700} />
        </BooksContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
