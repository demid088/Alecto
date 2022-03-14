import About from './js/components/About';
import Footer from './js/components/Footer';
import Header from './js/components/Header';
import Mac from './js/components/Mac';
import Map from './js/components/Map';
import Opinions from './js/components/Opinions';
import Photo from './js/components/Photo';
import Pricing from './js/components/Pricing';
import Services from './js/components/Services';
import Team from './js/components/Team';
import Top from './js/components/Top';
import Try from './js/components/Try';
// import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <About />
      <Photo />
      <Mac />
      <Opinions />
      <Services />
      <Team />
      <Pricing />
      <Map />
      <Try />
      <Footer />
    </div>
  );
}

export default App;
