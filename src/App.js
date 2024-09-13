import './App.css';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import Journal from './Components/Journal/Journal';
import Hero from './Components/NavBar/Hero/Hero';
import Navbar from './Components/NavBar/Navbar';
const bgImage = {
  backgroundImage: `url('https://images.unsplash.com/photo-1497294815431-9365093b7331?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5pZ2h0fGVufDB8fDB8fHww')`,
  backgroungRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  position: "relative",

}

function App() {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <div style={bgImage}>
        <Navbar />
        <Hero />
      </div>
      <Explore />
      <Journal />
      <Footer />
    </div>
  );
}

export default App;
