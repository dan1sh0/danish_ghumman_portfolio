import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import FeatureCards from './sections/FeatureCards';
import './index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCards />
    </>
  )
}

export default App
