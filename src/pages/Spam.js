import { useContext } from "react"
import { MailContext } from "../context/mail-context"
import SpamMailCard from "../Component/SpamMailCard"
import { NavLink } from "react-router-dom"

export default function Spam(){
    const {state} = useContext(MailContext)


 return (
        <div className='main'>

<nav className='sideNav'>
  <NavLink className="nav-link" to="/">Inbox</NavLink>
  <NavLink className="nav-link" to="/spam">Spam</NavLink>
  <NavLink className="nav-link" to="/trash">Trash</NavLink>
</nav>

<div className='content'>

  <h1 className='heading'>Spam Mails</h1>

        {state.spam.length === 0 ? (<h3 style={{textAlign:"center", paddingTop : "10px"}}>No Spam Mails</h3>) : (

            <ul className="list">
                {state.spam.map((mail) => {
                    return(
                        <SpamMailCard mail={mail}/>
                        )
   

                })}
            </ul>


        )}
        
    </div>
    </div>
    )
        
}