import { Container, Button } from "react-bootstrap";
import "../Actions.css"

const Actions = ({ reward, handleClaimReward, handleMintShow, handleStakeShow, handleUnstakeShow }) => {

    return (
        <div className="displayReward" style={{
            backgroundColor: "#00e6e6",
            height: "50vh",
            width: "100%",
            padding: "100px 10px",
            marginTop: "150px",
        }}>

            <Container fluid >
                <div className="rewards" style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "auto",
                    marginBottom: "100px"
                }}>
                    <h1 style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "500px",
                        fontFamily: "sans-serif",
                        fontSize: "50px",
                    }}>{
                            Number(reward) > 0 ? reward : "Collect Rewards"
                        }</h1>
                    <Button style={{
                        top: "50%",
                        backgroundColor: "#212529",
                        color: "white",
                        border: "none",
                        borderRadius: "15px",
                        padding: "10px 20px",
                        minHeight: "50px",
                        minWidth: "200px",
                    }} onClick={handleClaimReward}>Claim Reward</Button>
                </div>
                <div className="actions" style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "auto",
                    marginTop: "200px"
                }}>
                    <Button style={{
                        top: "50%",
                        backgroundColor: "#212529",
                        color: "white",
                        border: "none",
                        borderRadius: "15px",
                        padding: "10px 20px",
                        minHeight: "50px",
                        minWidth: "200px"
                    }} onClick={handleMintShow}>Mint</Button>
                    <Button style={{
                        top: "50%",
                        backgroundColor: "#212529",
                        color: "white",
                        border: "none",
                        borderRadius: "15px",
                        padding: "10px 20px",
                        minHeight: "50px",
                        minWidth: "200px"
                    }} onClick={handleStakeShow}>Stake</Button>
                    <Button style={{
                        top: "50%",
                        backgroundColor: "#212529",
                        color: "white",
                        border: "none",
                        borderRadius: "15px",
                        padding: "10px 20px",
                        minHeight: "50px",
                        minWidth: "200px"
                    }} onClick={handleUnstakeShow}>Unstake</Button>
                </div>
            </Container >
        </div>
    )
}

export default Actions;