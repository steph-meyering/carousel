import { Carousel } from "react-responsive-carousel";
import img1 from "./photos/1.jpg";
import img2 from "./photos/2.jpg";
import img3 from "./photos/3.jpg";
import peluche from "./photos/peluche.jpg";
import me from "./photos/me.jpg";

const MyCarousel = () => {

  const carouselOptions = {
    // autoFocus: true,
    autoPlay: true,
    interval: 3500,
    infiniteLoop: true,
    showThumbs: false,
    showStatus: false,
    useKeyboardArrows: true,
    dynamicHeight: true,
  };

  return (
    <Carousel {...carouselOptions}>
      <div>
        <img src={peluche} alt="cool cat pic" />
        <p className="legend">This is my cat, Peluche</p>
      </div>
      <div>
        <img src={me} alt="hiking in the woods" />
        <p className="legend">This is me hiking in Muir Woods</p>
      </div>
      <div className="img-container">
        <img src={img1} alt="landscape pic from unsplash" />
        <p className="legend">here are some landscape pics from unsplash</p>
      </div>
      <div>
        <img src={img2} alt="landscape pic from unsplash" />
      </div>
      <div>
        <img src={img3} alt="landscape pic from unsplash" />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
