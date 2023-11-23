import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { AuthProvider } from './components/Auth';
import FoF from './pages/FoF';
import Login from './pages/Login';
import Signin from './pages/Signin';

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
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/signin' element={<Signin />} />
            <Route path="*" element={<FoF />} />
          </Routes>
        </main>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
