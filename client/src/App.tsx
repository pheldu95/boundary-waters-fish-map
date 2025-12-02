import { Outlet } from 'react-router';
import './App.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

function App() {
  const [isOpen, setIsOpen] = useState(false);  //for the sidebar
  return (
    <div className="flex flex-col min-h-screen bg-brownt text-center">
      <NavBar />
      <div className="flex-1 relative overflow-hidden">
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
