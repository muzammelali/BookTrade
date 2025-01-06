import Sidebar from "./SideBar";
import BookList from "./books/BookList";
export default function MainContent() {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <BookList />
      </div>
    </main>
  );
}
