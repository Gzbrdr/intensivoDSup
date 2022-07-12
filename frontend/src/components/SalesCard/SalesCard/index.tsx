import SalesTableRow from "../SalesTableRow"
import SalesTableHead from "../SalesTableHead"
import "./styles.css"

function SalesCard() {
    return (
    <>
    <div className="card">
        <h2 className="sales-title">Vendas</h2>
        <div>
            <div className="form-control-container">
                <input className="form-control" type="text"/>
            </div>
            <div className="form-control-container">
                <input className="form-control" type="text"/>
            </div>
        </div>
        <div>
            <table className="sales-table">
            <SalesTableHead />
            <tbody>
                <SalesTableRow />
                <SalesTableRow />
                <SalesTableRow />
            </tbody>
            </table>
        </div>

    </div>
    </>
    )
}

export default SalesCard