import Carousel from 'react-bootstrap/Carousel';

function Coro() {
const mystyle={
    backgroundColor:"rgb(221,218,213)"
}


    return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
src='https://sslimages.shoppersstop.com/sys-master/root/h41/h63/27876954636318/Infuse-Web---hp-pages-main-carousel-2020715.jpg'
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

          src="https://sslimages.shoppersstop.com/sys-master/root/hbb/hd5/27855337783326/TH-Web--hp-th-police-and-more-2022-07-12-july-main-carousel.jpg"
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
          src='https://sslimages.shoppersstop.com/sys-master/root/hea/ha1/27863498817566/Top-%26-Tees-Web--hp-main--carousel-20220714-new.jpg'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={mystyle}
          className="d-block w-100 "
          src='https://sslimages.shoppersstop.com/sys-master/root/h9a/h0e/27798712483870/ace-the-base_web--new-widget-31-06-2022.jpg'
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
  );
}

export default Coro;