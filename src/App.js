import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route, NavLink } from 'react-router-dom'
import Slider from './comp/Slider';
import Profile from './comp/Profile';
import SignUp from './comp/SignUp';
import { useState } from 'react';



function App() {
  let[form,setForm]=useState()

  function save(name,value){
    setForm({...form, [name]:value})
  }
  return (
    <div className="App">
      <Router>
        <header>
          <h1>UI/UX Design </h1>
          <nav>
            <NavLink to="/">Slide</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="">Contact</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Slider/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/signup" element={
              <div className='signup'>
                <h2>SIGN UP</h2>
                <div className='CA'>
                  <p>Create Account</p>
                    <div className="inputs">
                    <SignUp label="Full Name" save={save}/>
                    <SignUp label="Email" save={save}/>
                    <SignUp label="Password" save={save}/>
                    </div>
                  <button>Create Account</button>
                  <p>Already have an account? <span>Log In</span></p>
                </div>
              </div>
              }
              />
          </Routes>
        </main>
      </Router>

    </div>
  );
}

export default App;
