import { Modal, Button, Form } from "react-bootstrap";

const MintModal = ({ show, handleClose, handleMint, tokenAmount, setTokenAmouont }) => {

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
                                value={tokenAmount}
                                onChange={(e) => setTokenAmouont(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Enter the token amount you want to mint
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleMint}>
                        Mint
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MintModal;