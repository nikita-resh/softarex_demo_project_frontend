import {observer} from "mobx-react-lite";
import {Button, Col, Form, Row} from "react-bootstrap";

function UserDeleteForm(props) {
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
                    Delete profile
                </h5>
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
            <Row className="mb-3">
                <Col class="d-flex justify-content-center">
                    <Button
                        style={{width: "100%"}}
                        type="submit"
                        onClick={handleSubmit}>
                        Delete
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default observer(UserDeleteForm);