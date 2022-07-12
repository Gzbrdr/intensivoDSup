import SalesTableRow from "../SalesTableRow"
import SalesTableHead from "../SalesTableHead"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./styles.css"

function SalesCard() {
    return (
    <>
    <div className="card">
        <h2 className="sales-title">Vendas</h2>
        <div>
            <div className="form-control-container">
                <ReactDatePicker
                    selected={new Date()}
                    onChange={(date: Date) => {}}
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="form-control-container">
                <ReactDatePicker
                    selected={new Date()}
                    onChange={(date: Date) => {}}
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                />
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