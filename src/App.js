import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />

      <div>
        <Home />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
