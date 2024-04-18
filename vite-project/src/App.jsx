import { useState } from 'react'
import  Header  from './components/Header.jsx';
import Home from './pages/Home.jsx'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <BrowserRouter>
         <Header />
         <Routes>
              <Route path="/" element={<Home/>}/>
         </Routes>
         </BrowserRouter>
    </>
  )
}

export default App
