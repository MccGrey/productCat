import Homee from "./pages/home/Homee";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Notfound from "./pages/notfound/Notfound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";

const App = () => {
  return (
    <div>
      <Homee />
      <About />
      <Contact />
      <Gallery />
      <Notfound />
      <Plans />
      <Trainers />
    </div>
  );
};

export default App;
