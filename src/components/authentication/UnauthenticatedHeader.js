import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Container, Nav, Navbar,} from "react-bootstrap";

function UnauthenticatedHeader() {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/auth/login");
    };
    const navigateToRegister = () => {
        navigate("/auth/register");
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <div onClick={() => navigate("/")}>LOGO<span className="font-weight-bold text-primary">TYPE</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar"/>
                <Navbar.Collapse id="navbar">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={navigateToLogin}>Log in</Nav.Link>
                        <Nav.Link onClick={navigateToRegister}>Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default observer(UnauthenticatedHeader);