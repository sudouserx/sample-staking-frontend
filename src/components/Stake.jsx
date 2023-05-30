import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Stake = ({ stakeAmount, setStakeAmount, handleStake }) => {
  return (
    <div
      className="stake"
      style={{ width: "90%", padding: "0%", margin: "auto" }}
    >
      <h2 style={{
        textAlign:"center"
      }}>Stake</h2>

      <br />

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Token amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
          />
          <Form.Text className="text-muted">
            Enter the token amount you want to stake
          </Form.Text>
        </Form.Group>

        <Button bg="light" variant="dark" onClick={handleStake}>
          Stake
        </Button>
      </Form>
    </div>
  );
};

export default Stake;
