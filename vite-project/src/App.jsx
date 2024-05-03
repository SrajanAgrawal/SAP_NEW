import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { AddEvents} from './pages/AddEvent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addEvent" element={<AddEvents />} />
      
    </Routes>
    <Footer />
    <ToastContainer />
    </BrowserRouter>
    
  )
}