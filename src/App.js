
import './App.css';
import Category from './components/Category';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import '@fortawesome/fontawesome-free/css/all.min.css';


import WhyUs from './components/WhyUs';
import Swiper from './components/Swiper';
import TopBrand from './components/TopBrand';
// import Footer from './components/Footer';
function App() {
  return (
   <>
<Navbar></Navbar>
<Home></Home>
<Category></Category>
<Products></Products>
<WhyUs></WhyUs>
<Swiper></Swiper>
<TopBrand></TopBrand>
{/* <Footer></Footer> */}

   
   </>
  );
}

export default App;
