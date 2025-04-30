import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'
import SearchBook from './components/SearchBook'
import UpdateBook from './components/UpdateBook'
import DeleteBook from './components/DeleteBook'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <nav>
          <Link to="/add">Add Book</Link>
          <Link to="/view">View Book</Link>
          <Link to="/search">Search Book</Link>
          <Link to="/update">Update Book</Link>
          <Link to="/delete">Delete Book</Link>
        </nav>
        <main>

        <Routes>
          <Route path='/add' element={<AddBook />} />
          <Route path='/view' element={<ViewBook />} />
          <Route path='/search' element={<SearchBook />} />
          <Route path='/update' element={<UpdateBook />} />
          <Route path='/delete' element={<DeleteBook />} />
        </Routes>
        </main>
        <footer style={{ marginTop: '2rem', textAlign: 'center', padding: '1rem' }}>
          Abhinav Verma | CSE DS | Roll No: 2200321540007
        </footer>
      </Router>
    </div>
  )
}

export default App
