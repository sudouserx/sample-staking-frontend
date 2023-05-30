import { Modal, Button, Form } from "react-bootstrap";

const StakeModal = ({ show, handleClose, handleStake, stakeAmount, setStakeAmount }) => {

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleStake}>
                        Stake
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default StakeModal;