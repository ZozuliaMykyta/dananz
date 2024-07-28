import {
  HashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import Teams from "./pages/Teams";
import ContactUs from "./pages/ContactUs";

const router = HashRouter(
  createRoutesFromElements(
    <Route path="/dananz" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/dananz/about" element={<About />} />
      <Route path="/dananz/services" element={<Services />} />
      <Route path="/dananz/teams" element={<Teams />} />
      <Route path="/dananz/contactus" element={<ContactUs />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
