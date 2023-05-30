import { Container, Button } from "react-bootstrap";

const Actions = () => {

    return (
        <Container fluid style={{
            height: "30vh",
            width: "100%",
            // display: "flex",
            // justifyContent: "center",

        }}>
            <div className="rewards" style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "100px auto",
                width: "100%",
                maxWidth: "auto",
            }}>
                <h1>Rewards</h1>
                <Button>Claim reward</Button>
            </div>
            <div className="actions" style={{
                display: "flex",
                justifyContent: "space-evenly",
                // alignItems: "center",
                margin: "50px auto",
                width: "100%",
                maxWidth: "auto",
            }}>
                <Button>Mint</Button>
                <Button>Stake</Button>
                <Button>Unstake</Button>
            </div>
        </Container>
    )
}

export default Actions;