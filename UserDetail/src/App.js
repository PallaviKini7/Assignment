import './App.css';

import { useSelector } from 'react-redux';
import { addUser, deleteUser } from './features/users';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
  const userList = useSelector((state) => state.users.value)
  const dispatch = useDispatch()
  const [name, setname] = useState("")
  const [address, setaddress] = useState("")
  const [phone, setphone] = useState()

  return (
    <div className="App">
      <div className='adduser'>
        <input type="text" placeholder='Name' onChange={(e) => { setname(e.target.value) }} className='name' />
        <input type="text" placeholder='Phone' onChange={(e) => { setphone(e.target.value) }} className='name' />
        <input type="text" placeholder='Address' onChange={(e) => { setaddress(e.target.value) }} className='name' />
        <button onClick={() => {
          dispatch(addUser({
            id: userList[userList.length - 1] + 1,
            name,
            address,
            phone
          }))
        }} className='btn'>ADD</button>
      </div>
      <div className='displayUser'>
        {userList.map((user) => {
          return (
            <div className='user-detail'>
              <div className='user-info'>
                <h3>{user.name}</h3>
                <h3>{user.phone}</h3>
                <h3>{user.address}</h3>

              </div>
              <div className='dlt-button'> <button onClick={() => {
                dispatch(deleteUser({ id: user.id }))
              }} className='R-Name'>Remove</button>
              </div>



            </div>
          )
        })}

      </div>

    </div>
  );
}

export default App;
