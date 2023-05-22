import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

const NgoCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/10ECF/production/_107772396_treesmall.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <mark>
          Green Yatra Home </mark><br /> <br />
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src="https://www.amsty.com/images/easyblog_articles/116/b2ap3_large_plant-growing-licensed.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <mark>Green World Clean World</mark><br /> <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src="https://thumbs.dreamstime.com/b/plant-seeds-planting-trees-growth-seeds-germinating-good-quality-soils-nature-plant-seeds-planting-trees-growth-129899351.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <mark>Sankalp Taru</mark><br /> <br />
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default NgoCarousel