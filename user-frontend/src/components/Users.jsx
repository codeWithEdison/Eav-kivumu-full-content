import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'



export interface user{
    name: String,
    email: String,
    id: Number
}


const Users = () => {
    const [users, setUsers] =useState([]);
    const [error, setError] = useState<user>(null);
    const [loading, setLoading] = useState(null);

    let a:number=  10;
    a = 'me'; 
    
const fetchUsers = async()=>{
    setLoading(true)
    
    try{
        const response = axiosInstance.get('/users');
        setUsers(response.data);
        

    }catch(e){

}
}

useEffect(()=>{
    fetchUsers();
},[users])
  

return (
    <>
    
   { loading ? <p> loding </p>: <table>
        <tr>
            <th> #</th>
            <th>name</th>
            <th>email</th>
        </tr>
       {users.map((user:user) =>{
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
       })}
    </table>
}

</>
)
}
export default Users