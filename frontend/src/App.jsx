import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    genre:'',
    stockQuantity:''
    // TODO (Student): Add missing fields for the state
  });

  const fetchBooks = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/books`);
      setBooks(res.data);
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/books`, formData);
      fetchBooks();

      setFormData({
        title: '',
        author: '',
        price: '',
        genre:'',
        stockQuantity:''
        // TODO (Student): Clear the missing fields here
      });
    } catch (err) {
      console.error('Error adding book:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/books/${id}`);
      fetchBooks();
    } catch (err) {
      console.error('Error deleting book:', err);
    }
  };

  return (
    <div className="container">
      <h1>Book Manager</h1>

      <section className="card">
        <h2>Add New Book</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Genre</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            >
              <option value="">Select a genre</option>
              <option value="Programming">Programming</option>
              <option value="Novel">Novel</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Stock Quantity</label>
            <input
              type="number"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary">Add Book</button>
        </form>
      </section>

      <section className="card">
        <h2>Book List</h2>

        {books.length === 0 ? (
          <p>No books found.</p>
        ) : (
          <div className="book-list">
            {books.map((book) => (
              <div className="book-card" key={book._id}>
                <div>
                  <h3>{book.title}</h3>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Price:</strong> Rs. {book.price}</p>
                  <p><strong>Genre:</strong> {book.genre}</p>
                  <p><strong>Stock Quantity:</strong> {book.stockQuantity}</p>

                  {/* TODO (Student): Display Genre here */}

                  {/* TODO (Student): Display Stock Quantity here */}
                </div>

                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete Book
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
