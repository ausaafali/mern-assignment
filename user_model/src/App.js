import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Register from './Components/Register';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
