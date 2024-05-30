import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Page404 from "./pages/Page404";
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Shop from './pages/Shop';
import Navbar from "./components/Navbar"
import "./App.scss";
import { useRecoilState } from "recoil";
import { $ShowNavbar } from "./store";
export default function App() {
  const [navbar] = useRecoilState($ShowNavbar)
  return (
    // el dev el main delwa2ty = el body
    <div className="col-12" id="App">
      {
        <BrowserRouter>
        {
        navbar ? <Navbar/> : null
        }
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="shop" element={<Shop />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
              <Route path="blog" element={<Blog />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}
