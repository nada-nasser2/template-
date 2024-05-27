import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"
import Page404 from "./pages/Page404"
import './App.scss'
export default function App() {
  return (
    // el dev el main delwa2ty = el body
    <div className="col-12" id='App '>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
             <Route index element={<HomePage/>}></Route>
             <Route path='about' element={<AboutPage/>}></Route>
             <Route path='*' element={<Page404/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
