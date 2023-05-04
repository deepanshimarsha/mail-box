import { useContext } from 'react';
import { MailContext } from '../context/mail-context';
import { NavLink } from 'react-router-dom';

export default function SpamMailCard({mail}){
    const {dispatch} = useContext(MailContext)
    console.log(mail.mId)

    return (
       
          
        <li className='list-item' style={{backgroundColor : mail.unread? "#f2f6fc":""}}>

                  <div className='list-heading'>
                    <p><b>Subject : {mail.subject}</b></p>
                    <button className='btn star' onClick={() => dispatch({type: "TOGGLE_STAR_SPAM", mailId: mail.mId })}>{mail.isStarred? "Unstar" : "Star"}</button>
                  </div>
              
                  <p className='para'>{mail.content}</p>

                  <div className='footer'>
                  <button 
                      className='btn-detail'
                      onClick={() => dispatch({type: "MARK_AS_READ", mailId : mail.mId, notToggle : true })}
                      ><NavLink to={`/detail/${mail.mId}`} style={{color:"#3366CC"}}>View Details</NavLink></button>
                    <div className='btn-container'>
                        <button className='btn not-spam' onClick={() => dispatch({type: "RESTORE_SPAM", mail: mail})}>Not Spam</button>
                    </div>
                    

                    
                  </div>
                </li>

            
    )
}