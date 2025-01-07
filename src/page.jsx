import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useContext } from "react";
import { ThemeContext } from "./components/context";

export default function Page() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme ? "dark" : ""}`}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
