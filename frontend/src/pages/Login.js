import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userDetails = {}, loading, error } = userLogin;
  const { refresh = "", access = "" } = userDetails;

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = loginDetails;
    dispatch(login(username, password));
  };

  useEffect(() => {
    if (access && refresh) {
      navigate("/");
    }
  }, [access, refresh, navigate]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={loginDetails.username}
            placeholder="Enter username"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">This is your username</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={loginDetails.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
