import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { UserContext } from "../../../auth/UserProvider.js";

const VenusNavBar = (props) => {
  const { user } = useContext(UserContext);
  var logout;
  var signup;
  var resources;
  var adminpanel;

  if (user.username && user.jwt) {
    console.log(user);
    signup = null;
    logout = <Nav.Link href="/account">Logout</Nav.Link>;
  } else {
    signup = <Nav.Link href="/signup">Signup</Nav.Link>
    logout = <Nav.Link href="/login">Login</Nav.Link>;
  }

  if (
    user.role === "ROLE_STAFF" ||
    user.role === "ROLE_ADMIN" ||
    user.role === "ROLE_USER"
  ) {
    resources = <Nav.Link href="/resources">Resources</Nav.Link>;
  }

  if (user.role == "ROLE_ADMIN") {
    adminpanel = <Nav.Link href="/adminpanel">Admin</Nav.Link>;
  }

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="w-100 ">
          <Nav.Link href="/platform">Platform</Nav.Link>
          <Nav.Link href="/news">News & Events</Nav.Link>
          <Nav.Link href="/leadership">Leadership</Nav.Link>
          {resources}
          <Nav.Link href="#pricing">About us</Nav.Link>
          <Nav.Link href="/contactus">Contact us</Nav.Link>
          <Nav.Item className="float-right">{logout}</Nav.Item>
          <Nav.Item className="float-right">{signup}</Nav.Item>
          {adminpanel}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default VenusNavBar;
