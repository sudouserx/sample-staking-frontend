import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Stake = ({ stakeAmount, setStakeAmount, handleStake }) => {
  return (
    <div
      className="stake"
      style={{ width: "90%", padding: "0%", margin: "auto" }}
    >
      <h2>Stake</h2>

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
            We'll never share your email with anyone else.
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
