import { OrderTable } from "../components/ordersTable/orderTable";
import "./order.css"

export default function Orders(){
    return (
        <div className="order-container">
            <OrderTable/>
        </div>
    )
}