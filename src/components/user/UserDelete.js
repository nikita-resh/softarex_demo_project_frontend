import {observer} from "mobx-react-lite";
import {Col, Container, Row} from "react-bootstrap";
import {Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import UserDeleteForm from "./UserDeleteForm";
import {useContext} from "react";
import {Context} from "../../index";

function UserDelete() {
    const navigate = useNavigate();
    const {store} = useContext(Context);
    const submit = (values, {setFieldError}) => {
        store.deleteUser(values.password, (error) => {
            if (error) {
                setFieldError("password", "Incorrect password.");
            } else {
                navigate("/");
            }
        });
    };
    const schema = yup.object().shape({
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
                            <UserDeleteForm
                                {...props}>
                            </UserDeleteForm>
                        )}
                        initialValues={{
                            password: ""
                        }}
                        validationSchema={schema}
                        onSubmit={submit}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default observer(UserDelete);