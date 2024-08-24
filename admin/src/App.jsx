import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/SIdebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
