import React from 'react'
import useGlobal from '../contextapi/Context'
import './message.css'
const Message = ({message})=> {
    console.log(message)
    const {user}= useGlobal()
    return (
        <div className={message.name === user.displayName ? "message__receiver":"message__container"}>
            <div className="message__username">{message.name}</div>
            <div className="message__main" >
                <div><p className="message__message">{message.message}</p></div>
            </div>
            <div className="message__time">{message?.timestamp?.toDate().toUTCString()}</div>

        </div>
    )
}

export default Message


//message__container second class