import Hero from './components/Hero';
import Biography from './components/Biography';
import Schools from './components/Schools';
import PersonalLife from './components/PersonalLife';
import Gallery from './components/Gallery';
import Tributes from './components/Tributes';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div id="biography">
        <Biography />
      </div>
      <div id="schools">
        <Schools />
      </div>
      <div id="personal">
        <PersonalLife />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="tributes">
        <Tributes />
      </div>
      <Footer />
    </main>
  );
}
