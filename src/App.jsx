import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homee from "./pages/home/Homee";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Notfound from "./pages/notfound/Notfound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Homee />
      <About />
      <Contact />
      <Gallery />
      <Notfound />
      <Plans />
      <Trainers />
    </BrowserRouter>
  );
};

export default App;
