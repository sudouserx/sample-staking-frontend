import { Table, Container } from "react-bootstrap";


const StakesTable = () => {
    return (
        <Container className="mt-5" fluid style={{
            margin: "0 0 100px auto",
        }}>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Address</th>
                        <th scope="col">Staked Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>0x123...</td>
                        <td>0.004 MTK</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>0x7823...</td>
                        <td>0.904 MTK</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>0x78763...</td>
                        <td>0.9654 MTK</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>0x78763...</td>
                        <td>0.9654 MTK</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>0x78763...</td>
                        <td>0.9654 MTK</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>0x78763...</td>
                        <td>0.9654 MTK</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>0x78763...</td>
                        <td>0.9654 MTK</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>0x78763...</td>
                        <td>0.9654 MTK</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>0x78763...</td>
                        <td>0.9654 MTK</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>0x78763...</td>
                        <td>0.9654 MTK</td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    )
}

export default StakesTable;