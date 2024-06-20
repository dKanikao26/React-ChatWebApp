import { Alert, Button, Form, Row, Col, Stack, FormControl } from "react-bootstrap";
import { useContext } from 'react';
import { AuthContext } from "../context/authContext";

const Register = () => {
    const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading } = useContext(AuthContext);

    return (
        <>
            <Form onSubmit={registerUser}>
                <Row style={{
                    height: "100vh",
                    justifyContent: "center",
                    paddingTop: "10%",
                }}>
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Register</h2>

                            <FormControl
                                type="text"
                                placeholder="Name"
                                value={registerInfo.name}
                                onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })}
                            />
                            <FormControl
                                type="email"
                                placeholder="Email"
                                value={registerInfo.email}
                                onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })}
                            />
                            <FormControl
                                type="password"
                                placeholder="Password"
                                value={registerInfo.password}
                                onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })}
                            />
                            <Button variant="primary" type="submit">
                                {isRegisterLoading ? "Processing" : "Register"}
                            </Button>

                            {registerError?.error && <Alert variant="danger"><p>{registerError?.message}</p></Alert>}

                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Register;
