import {observer} from "mobx-react-lite";
import * as yup from "yup";
import {Col, Container, Row} from "react-bootstrap";
import {Formik} from "formik";
import UserEditForm from "./UserEditForm";
import {useContext} from "react";
import {Context} from "../../index";

function UserEdit() {
    const {store} = useContext(Context);
    const submit = (values, {setFieldError}) => {
        store.editUser(values.firstName, values.lastName, values.username, values.password, values.newPassword, values.phoneNumber, (error) => {
            if (error) {
                setFieldError("password", "Maybe incorrect password.");
                setFieldError("username", "Maybe this email already exists.");
            }
        });
    };
    const schema = yup.object().shape({
        firstName: yup.string(),
        lastName: yup.string(),
        username: yup.string().required().email(),
        password: yup.string().required(),
        newPassword: yup.string(),
        phoneNumber: yup.string()
    });

    return (
        <Container className="justify-content-md-center bg-white"
                   style={{width: "25%"}}
        >
            <Row className="mt-5 x-3 py-5">
                <Col className="justify-content-md-center align-items-center">
                    <Formik
                        render={(props) => (
                            <UserEditForm
                                {...props}>
                            </UserEditForm>
                        )}
                        initialValues={{
                            firstName: (store.user.firstName !== undefined) ? store.user.firstName : "",
                            lastName: (store.user.lastName !== undefined) ? store.user.lastName : "",
                            username: store.user.username,
                            password: "",
                            newPassword: "",
                            phoneNumber: (store.user.phoneNumber !== undefined) ? store.user.phoneNumber : ""
                        }}
                        validationSchema={schema}
                        onSubmit={submit}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default observer(UserEdit);