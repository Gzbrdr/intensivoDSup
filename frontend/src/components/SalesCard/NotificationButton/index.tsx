import notifIcon from "../../../assets/img/notification-icon.svg"
import "./styles.css"

function NotificationButton() {
    return (
        <>
        <div className="red-btn">
            <a href="#">
                <i><img src={notifIcon} alt="Notificar"/></i>
            </a>
        </div>
        
        </>
    )
  }

  export default NotificationButton