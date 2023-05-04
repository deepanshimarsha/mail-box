import { useParams, NavLink } from "react-router-dom"
import { useContext } from "react"
import { MailContext } from "../context/mail-context"
import DetailCard from "../Component/DetailCard"

export default function Detail(){

    const {mailId} = useParams()

    const {state} = useContext(MailContext)

    const mailDetail = state.mailData.find(({mId}) => mId === mailId)


    return (
        <div className='main'>

        <nav className='sideNav'>
          <NavLink className="nav-link" to="/">Inbox</NavLink>
          <NavLink className="nav-link" to="/spam">Spam</NavLink>
          <NavLink className="nav-link" to="/trash">Trash</NavLink>
        </nav>

        <div className='content'>

          <h1 className='heading'>Details</h1>

          <DetailCard mail={mailDetail}/>

        </div>
        </div>
    )
}