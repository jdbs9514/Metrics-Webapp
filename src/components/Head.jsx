/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import bleach from './assets/bleach.jpg';
import kaisen from './assets/kaisen.png';
import naruto from './assets/naruto.jpg';
import aot from './assets/aot.jpg';

function Head() {
  <div style={{ overflow: 'none' }}>
    <Carousel fade>
      <Carousel.Item>
        <img
        src={bleach}
        className="d-block"
        alt="imagen"
        />
        <Carousel.Caption>
          <h3>Bleach</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        src={kaisen}
        className="d-block"
        alt="imagen"
        />
        <Carousel.Caption>
          <h3>JiuJutsu Kaisen</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        src={naruto}
        className="d-block"
        alt="imagen"
        />
        <Carousel.Caption>
          <h3>Naruto</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        src={aot}
        className="d-block"
        alt="imagen"
        />
        <Carousel.Caption>
          <h3>aot</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>;
}

export default Head;
