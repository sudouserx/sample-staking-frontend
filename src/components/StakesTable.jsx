import { Table } from "react-bootstrap";


const StakesTable = () => {
    return(
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
            </tbody>
        </Table>
    )
}

export default StakesTable;