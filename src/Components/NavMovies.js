import { Navbar,Container, Nav } from "react-bootstrap"
import{Link} from "react-router-dom"
const NavMovies=()=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link}to='/AddMovie'>Add movie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link}to='/List'>Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavMovies