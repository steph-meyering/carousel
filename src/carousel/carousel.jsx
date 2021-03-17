import { Carousel } from "react-responsive-carousel";
import img1 from "./photos/1.jpg";
import img2 from "./photos/2.jpg";
import img3 from "./photos/3.jpg";
import peluche from "./photos/peluche.jpg";

const MyCarousel = () => {

  const carouselOptions = {
    autoFocus: true,
    autoPlay: true,
    interval: 3000,
    infiniteLoop: true,
    showThumbs: false,
    showStatus: false,
    useKeyboardArrows: true,
    dynamicHeight: true,
  };

  return (
    <Carousel {...carouselOptions}>
      <div className="img-container">
        <img src={img1} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={img2} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={peluche} />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
