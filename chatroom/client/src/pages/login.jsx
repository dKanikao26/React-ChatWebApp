import { Alert, Button, Form, Row, Col, Stack, FormControl } from "react-bootstrap";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Login = () => {
    const {  LoginUser,updateLoginInfo,loginError, isloginLoading}  = useContext(AuthContext);
    return (

        <>
            <Form onSubmit={ LoginUser}>
                <Row style={{
                    height: "100vh",
                    justifyContent: "center",
                    paddingTop: "10%",
                }}>
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Login</h2>
                            <FormControl type="text" placeholder="Email" onChange={(e) =>
                                updateLoginInfo({...loginInfo,email:e.target.value})
                            } />

                            <FormControl type="password" placeholder="Password" onChange={(e)=>
                                updateLoginInfo({...loginInfo,password:e.target.value})
                            }/>
                            <Button variant="primary" type="submit">{isloginLoading? "loggin ": "Logged In"
}</Button>
                            {loginError?. error && <Alert variant="danger">
                                <p>
                                    {loginError?.message}
                                </p>
                                
                                </Alert>}
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Login;
