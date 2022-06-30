import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

 
function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState('null');

  const showalert = (message,type) => {
    setAlert ({
      msg : message,
      type : type
    })
  }
  setTimeout(() => {
    setAlert(null);
}, 1500);


  const togglemode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';  
      showalert('Dark mode has been enabled' ,"success");
      document.title = 'Text apps - Dark mode';

      // setInterval(() => {
      //   document.title = 'install text apps';
      // },2000)

      // setInterval(() => {
      //   document.title = 'it is amazing';
      // },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success");
      document.title = 'Text apps - Light mode';
    }
  }
  return (
    <>
     <Router>
      <Navbar title="Text-Utils" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}></Alert>
     <div className="container">
{/* // React use partial matching so we use exact.
   // users --> components1
   // users/home --. components2 */}
     <Routes>
          < Route exact path="/about" element={ <About />}/>
          < Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}  my-5 showAlert={showalert}  />}/>
            
        </Routes>

     </div>
  
     </Router>
    </> 
  );
}

export default App;