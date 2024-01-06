import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link,useNavigate} from 'react-router-dom';
function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        <Link to="/Home">Home</Link>
                        <Link to="/add">Add Product</Link>
                        <Link to="/update">Update Product</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/registration">Registration</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;