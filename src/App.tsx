import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userinfoObjProps } from './interfaces/interface';
import './App.css'
import { AuthProvider } from './components/Auth';
import FoF from './pages/FoF';

/**
 * App()
 * ================================
 * top component (except the root) to handle links and other components
 * 
 * @returns {ReactComponentElement}
 */
function App() {
  
  return (
    <div>
      <Router>
        <AuthProvider>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/new" element={<New />} />
            <Route path="/posts/:id" element={<Show />} />
            <Route path="/posts/:id/edit" element={<Edit />} />
            <Route path="*" element={<FoF />} />
          </Routes>
        </main>
        </AuthProvider>
      </Router>
      <Footer />
    </div>
  )
}

export default App
