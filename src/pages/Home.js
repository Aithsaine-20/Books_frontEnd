import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get("http://localhost:8082/books");
    setBooks(result.data);
  };

  const deleteBooks = async (id) => {
    await axios.delete(`http://localhost:8082/books/${id}`);
    loadBooks();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">B.N</th>
              <th scope="col">Name</th>
              <th scope="col">isbn</th>
              <th scope="col">author</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{book.name}</td>
                <td>{book.isbn}</td>
                <td>{book.author}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewbook/${book.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editbook/${book.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteBooks(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
