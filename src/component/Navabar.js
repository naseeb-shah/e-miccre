
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Box ,Text} from "@chakra-ui/react";
import {StarIcon,CartIcon} from '@chakra-ui/icons'

import { Outlet,Link} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'

function Bar() {

var auth= useSelector((e)=>e.Auth.value)
var cart= useSelector((e)=>e.Cart.value)
console.log(cart.length)

  // sname(sai)
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark" fixed="top"  >
      <Container>
        <Navbar.Brand > <Link to='/'>Shah Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> 
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>  */}
         
          </Nav> 
          <Nav>
            <Nav.Link href=""><Text fontStyle={'italic'} color={'black'}>About</Text></Nav.Link>
            <Nav.Link href="/checkout"><Box><Text  fontStyle={'italic'} color={'black'}>Cart</Text>{cart.length>0?<Text fontSize={'12px'} h='20px'w='20px'bg='red'borderRadius='50%' ml='20px' mt={'-30px'} color={'white'}>0{cart.length}</Text>:""}</Box></Nav.Link>
            <Nav.Link eventKey={2} >
              
              {!auth?<Link to='/log'><Text  fontStyle={'italic'} color={'black'}>Info</Text></Link>:<Link to='/updatedsoon'><Text  fontStyle={'italic'} color={'black'}>Profile</Text></Link>}
                </Nav.Link>
            <Nav.Link eventKey={2} >
              
          {!auth?<Link to='/log'><Text  fontStyle={'italic'} color={'black'}>Log in</Text></Link>:auth.username}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Box mt='50px'>
<Outlet  ></Outlet>
    
</Box></>
  );
}

export default Bar;