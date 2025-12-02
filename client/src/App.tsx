import { Outlet } from 'react-router';
import './App.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brownt text-center">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
