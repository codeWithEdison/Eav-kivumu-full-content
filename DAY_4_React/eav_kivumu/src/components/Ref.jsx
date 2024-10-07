import React, {useRef, useEffect, useState} from 'react';


const Ref = () => {
    const inputref = useRef(null);
    const submitCount = useRef(0);
    const [name, setName] = useState('');


    useEffect(() => {
        
            inputref.current.focus(); 
      
    }, []);

    const handleSubmit = (e) =>{
        e.preventDefault();
        submitCount.current +=1;
        alert(`welcome ${name} you have submited
             the form ${submitCount.current} times `);
        setName('');

    
    }
  return (
   <form  onSubmit={handleSubmit}>
    <input type="text"  
    ref={inputref} 
    value={name}
    onChange={(e)=>{setName(e.target.value)}}
    /> <br/>
    <button type="submit">submit</button>

    <p>you've subimitted the form :{submitCount.current} </p>

   </form>
  )
}

export default Ref