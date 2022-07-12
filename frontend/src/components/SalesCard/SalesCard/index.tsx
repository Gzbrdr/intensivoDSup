import SalesTableRow from "../SalesTableRow"
import SalesTableHead from "../SalesTableHead"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./styles.css"
import { useState } from "react"


function SalesCard() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date()
    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max)
    return (
    <>
    <div className="card">
        <h2 className="sales-title">Vendas</h2>
        <div>
            <div className="form-control-container">
                <ReactDatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="form-control-container">
                <ReactDatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
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