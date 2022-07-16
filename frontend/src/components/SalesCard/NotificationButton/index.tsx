import axios from "axios";
import notifIcon from "../../../assets/img/notification-icon.svg"
import "./styles.css"
import { BASE_URL } from "../../../utils/request"

type Props = {
    saleId: number;
}

function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
}

function NotificationButton( {saleId} : Props ) {
    return (
        <>
        <div className="red-btn">
            <a onClick={() => handleClick(saleId)}>
                <i><img src={notifIcon} alt="Notificar"/></i>
            </a>
        </div>
        
        </>
    )
  }

  export default NotificationButton