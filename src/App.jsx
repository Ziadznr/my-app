import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ExpertiseSection from "./components/ExpertiseSection";
import SelectedWorkSection from "./components/SelectedWorkSection";
import ClientsMarqueeSection from "./components/ClientsMarqueeSection";
import FloatingLogos from "./components/FloatingLogos";
import FooterSection from "./components/FooterSection";
import MobileFooter from "./components/MobileFooter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <ExpertiseSection />
      <SelectedWorkSection />
      <ClientsMarqueeSection />
      <div className="hidden xs:block">
  <FloatingLogos />
</div>
     <div className="block xs:hidden">
        <MobileFooter />
      </div>

      {/* Desktop Footer */}
      <div className="hidden xs:block">
        <FooterSection />
      </div>
    </>
  );
}

export default App;