import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
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

  const removeBodyClasses= () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    // document.body.classList.remove('bg-secondary')

  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls) 
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
        <TextForm showAlert={showAlert} heading="TextChanger --> The way you think" mode={mode}/>
      </div>
    </>
  );
}

export default App;
