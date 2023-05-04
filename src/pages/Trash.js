import { useContext } from "react"
import { MailContext } from "../context/mail-context"
import TrashMailCard from "../Component/TrashMailCard"
import { NavLink } from "react-router-dom"

export default function Trash(){

    const {state} = useContext(MailContext)

    return (
        
            <div className='main'>
    
    <nav className='sideNav'>
      <NavLink className="nav-link" to="/">Inbox</NavLink>
      <NavLink className="nav-link" to="/spam">Spam</NavLink>
      <NavLink className="nav-link" to="/trash">Trash</NavLink>
    </nav>
    
    <div className='content'>
    
      <h1 className='heading'>Trash</h1>
      {state.trash.length === 0 ? (<h3 style={{textAlign:"center", paddingTop : "10px"}}>Trash is Empty</h3>) : (


<ul className="list">
{state.trash.map((mail) => {
    return(
        <TrashMailCard mail={mail}/>
    )
   

})}
</ul>
      )}
      
        
    </div>
    </div>
    )
        
}