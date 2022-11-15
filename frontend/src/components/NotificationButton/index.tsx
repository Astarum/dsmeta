
import icon from '../../assets/notification-icon.svg'
import './style.css'


function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar"></img>
        </div>
    )
}

export default NotificationButton
