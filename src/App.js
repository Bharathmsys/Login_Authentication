import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import {useState} from 'react'
function App() {
  const [email,setEmail] = useState("")
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login email={email} setEmail={setEmail}/>}/>
     <Route path='singup' element={<Signup/>}/>
     <Route path='Home' element={<Home email={email}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
