import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ account, handleConnect }) => {
  console.log(account);
  return (
    <Navbar bg="light" expand="lg" style={{ height: "80px" }}>
      <Container fluid>
        <Navbar.Brand href="/"><h1>Defi Staking App</h1></Navbar.Brand>
        {account ? (
          <Button
            color="dark"
            variant="outline-dark"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {account}
          </Button>
        ) : (
          <Button color="dark" variant="outline-dark" onClick={handleConnect}>
            connect
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
