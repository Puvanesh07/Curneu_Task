import './App.css';
import Aboutus from './Components/Aboutus';
import Acuplan from './Components/Acuplan';
import Banner from './Components/Banner';
import Collabarator from './Components/Collabarator';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Mapg from './Components/Mapg';
import Navbar from './Components/Navbar';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Navbar/>
      <Aboutus/>
      <Products/>
      <Acuplan/>
      <Collabarator/>
      <Contact/>
      <Mapg/>
      <Footer/>
    </div>
  );
}

export default App;
