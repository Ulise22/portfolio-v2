import './App.css';
import Navbar from './components/pages/navbar/Navbar';
import Home from './components/pages/home/Home';
import Portfolio from './components/pages/portfolio/Portfolio';
import Contact from './components/pages/contact/Contact';
import Footer from './components/pages/footer/Footer';



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
