import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

function MyCarousel(props) {
  return (
    <Carousel>
      {props.carouselpics.map((pic) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic.img}
              alt="Third slide"
              style={{ width: "1280px", height: "720px" }}
              id="carousel-images"
            />

            <Carousel.Caption>
              <h3>Ernie Ball</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default MyCarousel;
