import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userinfoObjProps } from './interfaces/interface';
import './App.css'

/**
 * App()
 * ================================
 * top component (except the root) to handle links and other components
 * 
 * @returns {ReactComponentElement}
 */
function App() {
  const [userInfo, setUserInfo] = useState({userinfoObjProps});
  const nav = useNavigate();
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/new" element={<New />} />
            <Route path="/posts/:id" element={<Show />} />
            <Route path="/posts/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  )
}

export default App
