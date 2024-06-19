import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.componet.scss";
import { Carousel } from "react-bootstrap";
import imagen1 from "../../../assets/images1.png";
import imagen2 from "../../../assets/images2.png";
import descarga7 from "../../../assets/descarga7.png";

export const Slider = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="line">
        <img className="top d-block" src={imagen1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="line">
        <img className=" d-block " src={imagen2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="line">
        <img className=" d-block h" src={descarga7} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
