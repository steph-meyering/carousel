import logo from './logo.svg';
import MyCarousel from './carousel/carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Footer from './footer/footer';
import Header from './header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <MyCarousel/>
      <Footer/>
    </div>
  );
}

export default App;
