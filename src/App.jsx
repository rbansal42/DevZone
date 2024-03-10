import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  AboutDevzone,
  AboutUs,
  Tracks,
  Contact,
  StarsCanvas,
  FAQ,
  Sponsors
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 h-auto bg-primary">
        <div className="bg-hero-pattern h-auto bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <AboutDevzone />
        <AboutUs />
        <Tracks />
        <Sponsors />
        <FAQ />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
