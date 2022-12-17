import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={"https://cdn-icons-png.flaticon.com/512/825/825590.png"}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React GitHub Gist Test
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
