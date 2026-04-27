const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /api/books - Fetch all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/books - Create a new book
router.post('/', async (req, res) => {
  const { title, author, price,genre,stockQuantity} = req.body; 
  // TODO (Student): Read the new fields here

  const book = new Book({
    title,
    author,
    price,
    genre,
    stockQuantity
    // TODO (Student): Assign the new fields here
  });

  try {
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// TODO (Student): Implement DELETE /api/books/:id route here
router.delete('/:id',async(req,res)=>{
  try{
      const deleteBook=await Book.findByIdAndDelete(req.params.id);

      if(!deleteBook){
        return res.status(404).json({message:"Book not found"})
      }

      res.json({message:"Book deleted successfully"})
  }catch(err){
    console.error.json({message:err.message})

  }
})

module.exports = router;
