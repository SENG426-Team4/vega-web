import { useContext } from "react";
import { NavLink } from "react-router-dom";
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
    logout = <Nav.Link as={NavLink} to="/account">Logout</Nav.Link>;
  } else {
    signup = <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
    logout = <Nav.Link as={NavLink} to="/login">Login</Nav.Link>;
  }

    if (
        user.role === "ROLE_STAFF" ||
        user.role === "ROLE_ADMIN" ||
        user.role === "ROLE_USER"
    ) {
        resources = <Nav.Link as={NavLink} to="/resources">Resources</Nav.Link>;
    }

    if (user.role == "ROLE_ADMIN") {
        adminpanel = <Nav.Link as={NavLink} to="/adminpanel">Admin</Nav.Link>;
    }


    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="w-100 ">
                    <Nav.Link as={NavLink} to="/platform">Platform</Nav.Link>
                    <Nav.Link as={NavLink} to="/news">News & Events</Nav.Link>
                    <Nav.Link as={NavLink} to="/leadership">Leadership</Nav.Link>
                    {resources}
                    <Nav.Link as={NavLink} to="/aboutus">About us</Nav.Link>
                    <Nav.Link as={NavLink} to="/contactus">Contact us</Nav.Link>
                    {logout}
                    {signup}
                    {adminpanel}
                </Nav>
            </Container>
        </Navbar>
    );
};
export default VenusNavBar;
