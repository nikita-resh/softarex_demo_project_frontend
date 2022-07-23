import {observer} from "mobx-react-lite";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function LoginForm(props) {
    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
    } = props;
    const navigate = useNavigate();

    return (
        <Form>
            <Row className="mb-3">
                <h2 className="d-flex justify-content-center">
                    LOGO<span className="font-weight-bold text-primary">TYPE</span>
                </h2>
            </Row>
            <Row className="mb-4">
                <h5 className="d-flex justify-content-center">
                    Log In
                </h5>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isValid={touched.username && !errors.username}
                        isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.username}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3 d-flex justify-content-center">
                <Form.Group as={Col} md="auto">
                    <Form.Check
                        type="checkbox"
                        label="Remember me"
                        name="remember"
                        value={values.remember}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Col md="auto">
                    <p class="link-primary">Forgot your password?</p>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col class="d-flex justify-content-center">
                    <Button
                        style={{width: "100%"}}
                        type="submit"
                        onClick={handleSubmit}>
                        Log In
                    </Button>
                </Col>
            </Row>
            <Row className="mb-3 d-flex justify-content-center">
                <Col md="auto">
                    <p>Don`t have account?</p>
                </Col>
                <Col md="auto">
                    <p class="link-primary" onClick={() => navigate("/auth/register")}>
                        Sign Up
                    </p>
                </Col>
            </Row>
        </Form>
    );
}

export default observer(LoginForm);