import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {Col, Container, Row} from "react-bootstrap";
import {Formik} from "formik";
import {useContext} from "react";
import {Context} from "../../index";
import RegisterForm from "./RegisterForm";

function Register() {
    const navigate = useNavigate();
    const {store} = useContext(Context);
    const submit = (values, {setFieldError}) => {
        store.register(values.firstName, values.lastName, values.username, values.password,
            values.passwordConfirmation, values.phoneNumber, (error) => {
                if (error) {
                    setFieldError("username", "This email already exists.");
                } else {
                    navigate("/users/" + store.user.id + "/questions");
                }
            });
    };
    const schema = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().min(4).required(),
        passwordConfirmation: yup.string().required().oneOf([yup.ref("password"), null], "Passwords must be the same."),
        firstName: yup.string(),
        lastName: yup.string(),
        phoneNumber: yup.string(),
    });

    return (
        <Container className="justify-content-md-center bg-white"
                   style={{width: "25%"}}>
            <Row className="mt-5 mx-3 py-5">
                <Col className="justify-content-md-center align-items-center">
                    <Formik
                        render={(props) => (
                            <RegisterForm
                                {...props}>
                            </RegisterForm>)}
                        initialValues={{
                            username: "",
                            password: "",
                            passwordConfirmation: "",
                            firstName: "",
                            lastName: "",
                            phoneNumber: "",
                        }}
                        validationSchema={schema}
                        onSubmit={submit}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default observer(Register);