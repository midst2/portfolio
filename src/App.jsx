import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "../sections/Footer";
import NotFound from "../sections/NotFound";
import { Outlet } from "react-router-dom";

// Layout wraps only the routes that need Navbar + Footer
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
      </Route>

      {/* Outside Layout — no Navbar or Footer */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;