import { Navbar, Container, Nav } from 'react-bootstrap';
import DumbMerchLogo from '../assets/DumbMerch_Logo.png';
import '../style/Navigation.css';

function Navigation() {
    return(
        <Navbar className='border-navbar navbar fw-bold'>
            <Container>
                <Navbar.Brand href="/homepage"><img src={DumbMerchLogo} alt="DumbMerch Logo" width="70" height="68.22" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                       </Nav>
                        <Nav>
                        <Nav.Link style={{ color: 'white' }} href="/complain">Complain</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} href="/profile">Profile</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} href="/register">Logout</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation