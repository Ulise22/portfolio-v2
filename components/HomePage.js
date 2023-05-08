import Navbar from './pageComps/navbar/Navbar';
import Home from './pageComps/home/Home';
import Portfolio from './pageComps/portfolio/Portfolio';
import Contact from './pageComps/contact/Contact';
import Footer from './pageComps/footer/Footer';



export default function HomePage() {
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