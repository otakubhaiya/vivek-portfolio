import Clients from "@/components/sections/Clients/Clients";
import Footer from "@/components/sections/Footer/Footer";
import Projects from "@/components/sections/Projects/Projects";
import Services from "@/components/sections/Services/Services";
import Home from "@components/sections/Home/Home";
import Navbar from "@/components/navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Clients />
      <Footer />
    </>
  );
}
