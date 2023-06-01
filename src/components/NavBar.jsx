import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ account, handleConnect, balance }) => {
  return (
    <Navbar expand="lg" style={{ height: "150px", background: "#4BC6D7" }}>
      <Container fluid>
        <Navbar.Brand href="/"><h1>Defi Staking App</h1></Navbar.Brand>
        <>
          {
            balance && (
              <Button
                color="dark"
                variant="outline-dark"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "200px",
                }}
              >
                {balance}

              </Button>
            )
          }
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
        </>
      </Container>
    </Navbar>
  );
};

export default NavBar;
