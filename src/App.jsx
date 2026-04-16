import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ExpertiseSection from "./components/ExpertiseSection";
import SelectedWorkSection from "./components/SelectedWorkSection";
import ClientsMarqueeSection from "./components/ClientsMarqueeSection";
import FloatingLogos from "./components/FloatingLogos";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <ExpertiseSection />
      <SelectedWorkSection />
      <ClientsMarqueeSection />
      <FloatingLogos />
      <FooterSection />
    </>
  );
}

export default App;