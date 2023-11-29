import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { AuthProvider } from './components/Auth';
import FoF from './pages/FoF';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Lobby from './pages/Lobby';
import ChatPage from './pages/ChatPage';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

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
              <Route path="/" element={<Login />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/lobby' element={<Lobby />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/chat/:id' element={<ChatPage />}/>
              <Route path="*" element={<FoF />} />
            </Routes>
          </main>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
