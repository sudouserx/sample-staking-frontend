import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Reward = ({ reward, handleClaimReward, handleMint, tokenAmount, setTokenAmount }) => {
  return (
    <Card
      style={{
        margin: "5% 10px",
      }}
    >
      <Card.Header
        as="h2"
        style={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Stake Rewards
      </Card.Header>
      <Card.Body>
        {reward ? (
          <div>
            <Card.Title>{`Reward: ${reward} $MTK`}</Card.Title>
            <div className="btns" style={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              <Button variant="dark" onClick={handleClaimReward}>
                <i className="fas fa-coins"></i>Claim Reward
              </Button>
              <Form className="d-flex">
                <Form.Control
                  type="number"
                  placeholder="Enter amount"
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(e.target.value)}
                />
                <Button variant="dark" onClick={handleMint} style={{
                  margin: "auto 5px"
                }}>Mint</Button>
              </Form>
            </div>
          </div>
        ) : (
          <div>
            <Card.Title>No rewards</Card.Title>
            <Form className="d-flex">
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
              />
              <Button variant="dark" onClick={handleMint} style={{
                margin: "auto 5px"
              }} >Mint</Button>
            </Form>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Reward;
