import {observer} from "mobx-react-lite";
import {Button, Col, Form, Row} from "react-bootstrap";

function UserEditForm(props) {
    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
    } = props;

    return (
        <Form>
            <Row className="mb-4">
                <h5 className="d-flex justify-content-center">
                    Edit Profile
                </h5>
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
                <Form.Group as={Col}>
                    <Form.Control
                        type="password"
                        placeholder="Current password*"
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
                        placeholder="New password"
                        name="newPassword"
                        value={values.newPassword}
                        onChange={handleChange}
                        isValid={touched.newPassword && !errors.newPassword}
                        isInvalid={!!errors.newPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.newPassword}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Col class="d-flex justify-content-center">
                    <Button
                        style={{width: "100%"}}
                        type="submit"
                        onClick={handleSubmit}>
                        Save
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default observer(UserEditForm);