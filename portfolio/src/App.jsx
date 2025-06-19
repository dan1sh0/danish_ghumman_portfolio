import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import FeatureCards from './sections/FeatureCards';

import ExperienceSection from './sections/ExperienceSection';
import TechStack from './sections/TechStack';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
    </>
  )
}

export default App
