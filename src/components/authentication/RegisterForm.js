import {observer} from "mobx-react-lite";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function RegisterForm(props) {
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
                    Sign Up
                </h5>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Control
                        type="email"
                        placeholder="Email*"
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
                        placeholder="Password*"
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
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Control
                        type="password"
                        placeholder="Password confirmation*"
                        name="passwordConfirmation"
                        value={values.passwordConfirmation}
                        onChange={handleChange}
                        isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                        isInvalid={!!errors.passwordConfirmation}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.passwordConfirmation}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isValid={touched.firstName && !errors.firstName}
                        isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        isValid={touched.lastName && !errors.lastName}
                        isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        isValid={touched.phoneNumber && !errors.phoneNumber}
                        isInvalid={!!errors.phoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.phoneNumber}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Col class="d-flex justify-content-center">
                    <Button
                        style={{width: "100%"}}
                        type="submit"
                        onClick={handleSubmit}>
                        Sign Up
                    </Button>
                </Col>
            </Row>
            <Row className="mb-3 d-flex justify-content-center">
                <Col md="auto">
                    <p>Already have account?</p>
                </Col>
                <Col md="auto">
                    <p class="link-primary" onClick={() => navigate("/auth/login")}>
                        Log in
                    </p>
                </Col>
            </Row>
        </Form>
    );
}

export default observer(RegisterForm);