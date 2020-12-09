import React from "react";
import {Carousel} from "react-bootstrap";
import "./style.css"

function MyCarousel(props) {
console.log(props.carouselpics)
    return (


        <Carousel>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.carouselpics[0].img}
      alt="First slide"
      style={{width: "1280px", height: "723px"}}
    />
    <Carousel.Caption>
      <h3>Ernie Ball</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.carouselpics[1].img}
      alt="Third slide"
      style={{width: "1280px", height: "720px"}}
    />

    <Carousel.Caption>
      <h3>Ernie Ball</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.carouselpics[2].img}
      alt="Third slide"
      style={{width: "1280px", height: "720px"}}
    />

    <Carousel.Caption>
      <h3>Ernie Ball</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.carouselpics[3].img}
      alt="Third slide"
      style={{width: "1280px", height: "720px"}}
    />

    <Carousel.Caption>
      <h3>Ernie Ball</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>






</Carousel>
    )
}

export default MyCarousel;