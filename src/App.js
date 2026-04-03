
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/about'
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  function showAlert(message,type){
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1000);
    
  }

  function toggleMode(){
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#678EB7';
      showAlert("Dark Mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";

      // setInterval( () =>{
      //   document.title = "TextUtils is amazing App";
      // },1500);  

      //In this we can change the title by every regular interval it is like we see in fake websites to attract users to download apps

      // setInterval( ()=>{
      //   document.title="Install TextUtils Now";
      // },2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    
    <Router>
      <Navbar title="Text Utils" aboutText="About Us" homeText="Home" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Navbar /> */}
      <div className='container my-3' >
        <Routes>
          <Route path="/"
            element={ <TextForm heading="Enter the Text to analyze" mode={mode} showAlert={showAlert}/> }
          />
      
          <Route path="/about"
            element={<About />}
          />
        </Routes>
      </div>
    </Router>

  </>
  );
}

export default App;
