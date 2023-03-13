import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState('light'); //whether dak ode is enable or not 
  const [alert, setAlert] = useState(null); 

 //devise a method
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500)

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#002040';
      showAlert("Dark mode has been enabled", "success");
      // Written on the top beside favicon
      // document.title = "TextChanger - Dark Mode"
      // For evil app
      // setInterval(() => {
      //   document.title = "Install TextChanger YEAH"

      // },1000) 
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // Written on the top beside favicon
      // document.title = "TextChanger - Light Mode" 
      // setInterval(() => {
      //   document.title = "Install TextChanger Now "
  
      // },1000) 
    }
  }

  return (
    <>
      <Navbar title="TextChanger" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <div className="container my-4">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
