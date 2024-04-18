import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"


const App = () => {
  return (
    <BrowserRouter>
      <Header user = {user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
