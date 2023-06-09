import { Modal, Button, Form } from "react-bootstrap";

const UnstakeModal = ({ show, handleUnstakeClose, handleUnstake, UnstakeAmount, setUnstakeAmount }) => {

    return (
        <div>
            <Modal show={show} onHide={handleUnstakeClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Unstake</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Token amount</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter amount"
                                value={UnstakeAmount}
                                onChange={(e) => setUnstakeAmount(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Enter the token amount you want to Unstake
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleUnstakeClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUnstake}>
                        Unstake
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UnstakeModal;