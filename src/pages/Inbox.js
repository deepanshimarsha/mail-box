import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { MailContext } from '../context/mail-context';
import MailCard from '../Component/MailCard';

export default function Inbox(){
    const {state, dispatch} = useContext(MailContext)

    const unreadCount = state.filteredMail.filter(({unread}) => unread).length
    return (

      <div className='main'>

        <nav className='sideNav'>
          <NavLink className="nav-link" to="/">Inbox</NavLink>
          <NavLink className="nav-link" to="/spam">Spam</NavLink>
          <NavLink className="nav-link" to="/trash">Trash</NavLink>
        </nav>

        <div className='content'>

          <h1 className='heading'>Mail Box</h1>
          
          <fieldset style={{borderRadius: "5px", padding:"10px", paddingBottom:"20px", width:"96%"}}>
            <legend>Filters</legend>
            <label><input 

              type='checkbox'
              checked={state.showUnread}
              onChange={() => dispatch({type: "TOGGLE_SHOW_UNREAD"})}>

            </input>
            show Unread mails</label>

            <label><input 

              type='checkbox'
              checked={state.showStarred}
              onChange={() => dispatch({type: "TOGGLE_SHOW_STARRED"})}>

            </input>
            show starred mails</label>
          </fieldset>

          <h3>Unread : {unreadCount}</h3>

          <ul className='list'>
            {state.filteredMail.map((mail) => {
              return (
                <MailCard mail={mail}/>
              )
              
            })}
          </ul>
        </div>
      </div>
    )
   
}