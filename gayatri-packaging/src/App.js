// import './App.css';
// import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import Home from './components/Pages/Home'
// import Layout from './components/Layouts/Layout'
// import About from './components/Pages/About'
// import Quality from './components/Pages/Quality'
// import Products from './components/Pages/Products'
// import Infrastructure from './components/Pages/Infrastructure';
// import Gallery from './components/Pages/Gallery'
// import Contact from './components/Pages/Contact'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout/>}>
//         <Route index element={<Home/>}/>
//         <Route path='/home' element={<Home/>} />
//         <Route path='/about' element={<About/>} />
//         <Route path='/quality' element={<Quality/>} />
//         <Route path='/products' element={<Products/>} />
//         <Route path='/infrastructure' element={<Infrastructure/>} />
//         <Route path='/gallery' element={<Gallery/>} />
//         <Route path='/contact' element={<Contact/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Layout from './components/Layouts/Layout';
import About from './components/Pages/About';
import Quality from './components/Pages/Quality';
import Products from './components/Pages/Products';
import Infrastructure from './components/Pages/Infrastructure';
import Gallery from './components/Pages/Gallery';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/products" element={<Products />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
