// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtil" about="Aboutani"/>
    {/* <Navbar/> */}
    <div className="container">
    <TextForm heading="Enter hte thext to analyze" />
    </div>
    </>
  );
}

export default App;
