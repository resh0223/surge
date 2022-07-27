import './App.css';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import React, {useState} from 'react';
import {render} from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from './pages/register/login';
import student from "./pages/register/student";
import notes from "./pages/register/notes";



function App() {

    const [userid, setUserid] = useState("001");
    

  
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>

                
                <Route path="/login" element={<Login/>}/>
                <Route path="/student" element={<student/>}/>
                <Route path="/notes" element={<notes/>}/>
               

            </Routes>
        </BrowserRouter>
    );
}

export default App;
