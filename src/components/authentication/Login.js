import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {Col, Container, Row} from "react-bootstrap";
import {Formik} from "formik";
import LoginForm from "./LoginForm";
import {useContext} from "react";
import {Context} from "../../index";

function Login() {
    const navigate = useNavigate();
    const {store} = useContext(Context);
    const submit = (values, {setFieldError}) => {
        store.login(values.username,
            values.password,
            (error) => {
                if (error) {
                    setFieldError("password", "Incorrect email or password.");
                } else {
                    navigate("/users/" + store.user.id + "/questions");
                }
            });
    };
    const schema = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().required(),
    });

    return (
        <Container className="justify-content-md-center bg-white"
                   style={{width: "25%"}}
        >
            <Row className="mt-5 x-3 py-5">
                <Col className="justify-content-md-center align-items-center">
                    <Formik
                        render={(props) => (
                            <LoginForm
                                {...props}>
                            </LoginForm>
                        )}
                        initialValues={{
                            username: "",
                            password: ""
                        }}
                        validationSchema={schema}
                        onSubmit={submit}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default observer(Login);