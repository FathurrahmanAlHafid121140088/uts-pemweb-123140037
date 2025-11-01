import React from "react";

const DetailCard = ({ book }) => {
  if (!book) return <p>Pilih buku untuk melihat detailnya.</p>;

  return (
    <div className="detail-card">
      <h2>{book.title}</h2>
      <p><strong>Penulis:</strong> {book.author}</p>
      <p><strong>Tahun:</strong> {book.year}</p>
      <p><strong>Kategori:</strong> {book.subject}</p>
      <p>{book.description}</p>
      <img src={book.cover} alt={book.title} width="120" />
    </div>
  );
};

export default DetailCard;
