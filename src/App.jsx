import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Band from "./components/Band";
import Termine from "./components/Termine";
import Musik from "./components/Musik";
import Galerie from "./components/Galerie";
import Repertoire from "./components/Repertoire";
import Referenzen from "./components/Referenzen";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <About />
      <Band />
      <Termine />
      <Musik />
      <Galerie />
      <Repertoire />
      <Referenzen />
      <Booking />
      <Footer />
    </div>
  );
}
