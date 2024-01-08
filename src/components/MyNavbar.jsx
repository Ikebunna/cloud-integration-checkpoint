import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// nav bar component
function MyNavbar() {
  return (
    <Navbar className="shadow-lg p-3 mb-5  rounded">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/042 devs logo.png" className="logo--img" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
