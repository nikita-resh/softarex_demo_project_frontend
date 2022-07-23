import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Container, Nav, Navbar, NavDropdown,} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../../index";

function AuthenticatedHeader() {
    const navigate = useNavigate();
    const {store} = useContext(Context);
    const navigateToAnswers = () => {
        navigate("/users/" + store.user.id + "/answers");
    };
    const navigateToQuestions = () => {
        navigate("/users/" + store.user.id + "/questions");
    };
    const navigateToEditProfile = () => {
        navigate("/users/" + store.user.id + "/edit");
    };
    const navigateToDeleteProfile = () => {
        navigate("/users/" + store.user.id + "/delete");
    };
    const navigateToLogout = () => {
        store.logout()
        navigate("/auth/login");
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
                        <Nav.Link onClick={navigateToQuestions}>Your questions</Nav.Link>
                        <Nav.Link onClick={navigateToAnswers}>Answer the question</Nav.Link>
                        <NavDropdown
                            title={((store.user.firstName !== undefined) ? store.user.firstName : "Profile") + " " + ((store.user.lastName !== undefined) ? store.user.lastName : "")}
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item onClick={navigateToEditProfile}>
                                Edit Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={navigateToDeleteProfile}>
                                Delete Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={navigateToLogout}>
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default observer(AuthenticatedHeader);