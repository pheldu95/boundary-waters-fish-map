import { Outlet } from 'react-router';
import './App.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brownt text-center">
      <NavBar />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
