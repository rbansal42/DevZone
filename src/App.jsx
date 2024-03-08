import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  AboutDevzone,
  AboutUs,
  Tracks,
  Contact,
  StarsCanvas,
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
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
