
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from './routes/Home';
import Contact from './routes/Contact';
import Detail from './routes/Detail';
import Fav from './routes/Fav';

function App() {

  return(
    <div>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Fav />} />
          <Route path="/dentist/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  ) 
}

export default App;
