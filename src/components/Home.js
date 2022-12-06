import Carousel from 'react-bootstrap/Carousel';
import "../App.css"

function Home() {
  return (
    <div>
      <h1>Página Home</h1>
      <Carousel className='carouselMain'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://horario.com.br/wp-content/uploads/2019/09/01_geha_blog_enem.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://crb8.org.br/oldsite/wp-content/uploads/2018/08/library-488690_1280-750x430-660x330.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thoughtco.com/thmb/Z4n1wLKaHKYp6G_ZKSXdU_-q3pM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/startingcollege-58d177633df78c3c4ff303ba.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;
