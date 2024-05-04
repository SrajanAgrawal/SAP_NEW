import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { AddEvents} from './pages/AddEvent'
import { ApplyNow } from './pages/ApplyNow'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EventDetailPage from './pages/EventDetailPage'
import Dashboard from './pages/Dashboard'

export default function App(){
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addEvent" element={<AddEvents />} />
      <Route path="/event/:id" element={<EventDetailPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/applyNow' element={<ApplyNow/>}/>
      
    </Routes>
    <Footer />
    <ToastContainer />
    </BrowserRouter>
    
  )
}