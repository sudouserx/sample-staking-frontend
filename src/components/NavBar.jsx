import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ account, handleConnect, balance }) => {
  return (
    <Navbar expand="lg" fixed="top" style={{ height: "150px", background: "#212529" }}>
      <Container fluid>
        <Navbar.Brand href="/"><h1 style={{ color: "white" }}>Defi Staking App</h1></Navbar.Brand>
        < div style={{
          marginRight: "50px"
        }} >
          {
            balance && (
              <Button
                variant="outline-light"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "200px",
                  marginRight: "20px",
                  borderRadius: "20px",
                }}
              >
                {`$ ${Math.round(parseInt(balance) * 100) / 100} MTK`}
              </Button>
            )
          }
          {account ? (
            <Button
              color="light"
              variant="outline-light"
              // limit={5}
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "200px",
              }}
            >
              {account}
            </Button>
          ) : (
            <Button color="light" variant="outline-light" onClick={handleConnect} style={{
              marginRight: "20px",
              minHeight: "50px",
              minWidth: "200px"
            }}>
              connect
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
