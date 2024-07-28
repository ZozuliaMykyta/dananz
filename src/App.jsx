import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import Teams from "./pages/Teams";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="teams" element={<Teams />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
