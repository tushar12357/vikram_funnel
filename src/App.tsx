import CustomCursor from './components/CustomCursor.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import AboutSection from './pages/AboutSection.js';
import CoreFeatures from './pages/CoreFeatures.js';
import DigitalTransformationConsultingServices from './pages/DigitalTransformationConsultingServices.js';
import EngineeringServicesITServices from './pages/EngineeringServicesITServices.js';

import HeroSection from './pages/HeroSection';
import ManagementServicesPortfolio from './pages/ManagementServicesPortfolio.js';
import ManufacturingFacilityServices from './pages/ManufacturingFacilityServices.js';
import PriceCard from './pages/PriceCard.js';
import PricingSection from './pages/PricingSection.js';
import SolutionSection from './pages/SolutionSection.js';
import TechnologySolutionsSalesServices from './pages/TechnologySolutionsSalesServices.js';
import ViaMCT from './pages/ViaMCT.js';

const App = () => {
  return (
    <div>
      <CustomCursor/>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <CoreFeatures/>
      <PricingSection/>
      <PriceCard/>
      <SolutionSection/>
      <DigitalTransformationConsultingServices/>
      <TechnologySolutionsSalesServices/>
      <EngineeringServicesITServices/>
      <ManufacturingFacilityServices/>
      <ManagementServicesPortfolio/>
      <ViaMCT/>
      <Footer/>
    </div>
  )
}

export default App