import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Coro from "./carousel";
import AllProducts from "./products";
 export default function Home(){



    return(
        <>

{<Coro />}
<Container>
      
      <Row>
      {
 < AllProducts />
}
      </Row>
    </Container>
        

        <h1>deen</h1>
        </>
    )
 }

