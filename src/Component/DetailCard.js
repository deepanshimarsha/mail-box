import { useContext } from "react"
import { MailContext } from "../context/mail-context"
import { NavLink } from "react-router-dom"

export default function DetailCard({mail}){

    const {state, dispatch} = useContext(MailContext)
    return (
        <li className='list-item' style={{backgroundColor : mail.unread? "#f2f6fc":""}}>

        <div className='list-heading'>
          <p><b>Subject : {mail.subject}</b></p>
          
        </div>
    
        <p className='para'>{mail.content}</p>

        
      </li>
    )
}