import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Error404 from './pages/Error404';
import Navmenu from './components/Navmenu'
import Header from "./components/Header"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navmenu />
    <Header />
    <Routes>
      <Route path='/page1' element={<Page1 />}/>
      <Route path='/page2' element={<Page2 />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/*' element={<Error404 />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
