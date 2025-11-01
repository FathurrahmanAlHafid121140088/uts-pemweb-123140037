import React from "react";

const DataTable = ({ books, onSelect, onAdd }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Cover</th>
          <th>Judul</th>
          <th>Penulis</th>
          <th>Tahun</th>
          <th>Keterangan</th>
        </tr>
      </thead>
      <tbody>
        {books.length > 0 ? (
          books.map((book) => (
            <tr key={book.id}>
              <td><img src={book.cover} alt={book.title} width="80" /></td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>
                <button onClick={() => onSelect(book)}>Detail</button>
                <button onClick={() => onAdd(book)}>Tambah 📘</button>
              </td>
            </tr>
          ))
        ) : (
          <tr><td colSpan="7">Tidak ada buku ditemukan</td></tr>
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
