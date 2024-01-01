import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Partner from "@/Components/Partner";
import Service from "@/Components/Service";
import AboutUs from "./Components/AboutUs";
import Classes from "@/Components/Classes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partner />
      <Service />
      <AboutUs />
      <Classes />
    </div>
  );
};

export default App;
