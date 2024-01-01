// Components
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Partner from "@/Components/Partner";
import Service from "@/Components/Service";
import AboutUs from "./Components/AboutUs";
import Classes from "@/Components/Classes";
import Testimonials from "@/Components/Testimonials";
import ContactUs from "@/Components/ContactUs";
import Footer from "@/Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partner />
      <Service />
      <AboutUs />
      <Classes />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
