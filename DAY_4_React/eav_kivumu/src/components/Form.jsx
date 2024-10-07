import React from 'react'
import { useState } from 'react'

const Form = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const handleChange =(event) =>{
      const {name, value} = event.target; 
        setInputs(values =>({...values, [name]: value}))
    }

    const sendData =(event)=>{
        event.preventDefault();
        // alert(`hello ${username}`);


    }
  return (
    <form  onSubmit={sendData} method='get' autoComplete={false}>     
         {/* login form  */}

        <input type="text" 
        placeholder="Username"
         value={inputs.username } 
         name = "username"
         onChange={handleChange} />
        <input
         type="password" 
         placeholder="Password" 
         value={inputs.password }
         name = "password"
         onChange={handleChange} 
         />
        <button type="submit">Login</button>

        <p> username: {inputs.username}</p>
        <p> password: {inputs.password}</p> 

        
    </form>
  )
}

export default Form