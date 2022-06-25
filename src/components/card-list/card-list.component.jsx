import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './card-list.style.css';

function User(props) {
  const [user] = useState(props.user)
  return (
    <div className={props.className}>
      <div className='h-card'>
        <div className='h-card-body'>
          <img className='h-img' src={`https://robohash.org/${user.id}`} alt={`user ${user.name}`}  />
          <h5 className='h-card-title'>{user.name}</h5>
          <p className='h-card-text'>{user.email}</p>
          <p className='h-card-text'>{user.phone}</p>
        </div>
      </div>
    </div>
  )
}
export default User