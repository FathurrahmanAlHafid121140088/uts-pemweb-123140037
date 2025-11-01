import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import DataTable from "./components/DataTable";
import DetailCard from "./components/DetailCard";
import booksData from "./BookData";
import "./App.css";

function App() {
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(null);
  const [readingList, setReadingList] = useState(() => {
    return JSON.parse(localStorage.getItem("readingList")) || [];
  });

  const handleSearch = (query) => {
    const result = booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(result);
  };

  const addToReadingList = (book) => {
    if (!readingList.some((b) => b.id === book.id)) {
      const updatedList = [...readingList, book];
      setReadingList(updatedList);
      localStorage.setItem("readingList", JSON.stringify(updatedList));
    }
  };

  const removeFromReadingList = (id) => {
    const updatedList = readingList.filter((b) => b.id !== id);
    setReadingList(updatedList);
    localStorage.setItem("readingList", JSON.stringify(updatedList));
  };

  return (
    <div className="App">
      <Header />
      <SearchForm onSearch={handleSearch} />
      <DataTable books={filteredBooks} onSelect={setSelectedBook} onAdd={addToReadingList} />
      <DetailCard book={selectedBook} />

      <section className="reading-list">
        <h2>📖 Reading List</h2>
        {readingList.length === 0 ? (
          <p>Tidak ada buku dalam daftar bacaan.</p>
        ) : (
          <ul>
            {readingList.map((book) => (
              <li key={book.id}>
                <img src={book.cover} alt={book.title} width="40" />
                <span>{book.title}</span>
                <button onClick={() => removeFromReadingList(book.id)}>❌ Hapus</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
