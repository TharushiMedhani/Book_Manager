# Web and Mobile Technologies: MERN Stack Lab Test Practice

## Lab Test Title
Book Manager MERN Application Enhancement and Deployment

## Time Limit
2 Hours

## Total Marks
100

---

## Scenario
You are provided with a starter MERN Book Manager project containing a separate frontend and backend.

The existing system can add and view books with:
- Title
- Author
- Price

Your task is to complete and enhance the system by adding new fields, completing missing API functionality, testing locally with MongoDB Atlas, publishing to GitHub, and deploying frontend and backend separately.

---

## Part 1: Project Setup and Local Verification (10 Marks)

### Backend
1. Open the `backend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file using `.env.example`.
4. Add your MongoDB Atlas connection string:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
5. Start backend:
   ```bash
   npm run dev
   ```

### Frontend
1. Open the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start frontend:
   ```bash
   npm run dev
   ```
4. Open:
   ```text
   http://localhost:5173
   ```

### Verification
Capture screenshots of:
- Existing Add Book form
- Existing Home / Book List page

---

## Part 2: Functional Enhancement (40 Marks)

You must extend the system by adding the following new fields:

### New Field 01: Genre
- Type: String
- Required
- Allowed values:
  - Programming
  - Novel
  - Education
  - Other

### New Field 02: Stock Quantity
- Type: Number
- Required

---

### Backend Tasks
1. Open `backend/models/Book.js`.
2. Add `genre` and `stockQuantity` to the schema.
3. Open `backend/routes/books.js`.
4. Update the POST route to read and save the new fields.
5. Implement the missing DELETE route:
   ```text
   DELETE /api/books/:id
   ```

---

### Frontend Tasks
1. Open `frontend/src/App.jsx`.
2. Add `genre` and `stockQuantity` to the form state.
3. Add input fields to the Add Book form:
   - Genre dropdown
   - Stock Quantity number input
4. Send these values to the backend during form submission.
5. Display Genre and Stock Quantity in the book list.
6. Add a Delete button for each book.
7. Implement delete functionality using Axios.

---

## Part 3: GitHub Publication (10 Marks)

1. Create a public GitHub repository.
2. Push the complete project.
3. Make sure:
   - Backend and frontend folders are clearly separated.
   - `.env` is not pushed.
   - `.env.example` is included.

---

## Part 4: Separate Deployment (25 Marks)

### Backend Deployment
Deploy backend to Render / Railway / equivalent free platform.

### Frontend Deployment
Deploy frontend to Vercel / Netlify / equivalent free platform.

### Integration
Update the frontend API URL so the deployed frontend communicates with the deployed backend.

---

## Part 5: Submission Document (15 Marks)

Create a Word document or `SUBMISSION.md` with:

1. Student Name
2. Student ID
3. GitHub Repository Link
4. Screenshot of locally running existing Add Book page
5. Screenshot of locally running existing Home page
6. Screenshot of locally running updated Add Book page
7. Screenshot of locally running updated Home page
8. MongoDB Atlas collection screenshot
9. Frontend Live URL
10. Backend Live URL
11. Brief deployment notes

---

## Important Rules
- Do not remove existing core functionality.
- Do not submit broken or private links.
- Do not push `.env`.
- Screenshots must be clear and readable.
