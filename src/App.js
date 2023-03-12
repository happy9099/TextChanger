import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "TextChanger" />
      {/* <Navbar/> */}
      <div className="container my-4">
      <TextForm heading = "Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
