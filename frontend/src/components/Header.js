import { useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userDetails } = userLogin;
  const { access = "" } = userDetails;

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!access) {
      navigate("/login");
    }
  }, [navigate, access]);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/posts">Posts</Link>
          </Nav>
          <div className="d-flex">
            {access ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
