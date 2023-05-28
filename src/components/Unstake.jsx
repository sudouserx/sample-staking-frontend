import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Unstake = ({unstakeAmount, setUnstakeAmount, handleUnstake}) => {
  return (
    <div
      className="unstake"
      style={{ width: "90%", padding: "0%", margin: "auto" }}
    >
      <h2>Unstake</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Token amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={unstakeAmount}
            onChange={(e) => setUnstakeAmount(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button bg="light" variant="dark" onClick={handleUnstake}>
          Unstake
        </Button>
      </Form>
    </div>
  );
};

export default Unstake;
