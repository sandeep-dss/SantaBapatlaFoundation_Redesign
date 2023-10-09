import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Gallery from './Components/Gallery';
import Vision from './Components/Vision';

function App() {
  return (
    <div className="App">
    <Navbar/> 
    <Hero/>
    <Gallery/>
    <Vision/>
    </div>
  );
}

export default App;
