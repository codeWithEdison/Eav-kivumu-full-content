import React, { useState, useContext, createContext } from 'react' 


const UserContext = createContext();

export const UserProvider =({children}) =>{
    const [user, setUser] = useState("john doe");
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
const Context1 = () => {
   const {user} = useContext(UserContext)

  return (
   <>
   <h1>{`hello ${user} !`}</h1>
   <Context2 />
   </>
  )
}



function Context2(){
    return(
        <>
        <h1>Conetxt 2</h1>
        <Context3  />
        </>


    )
}

function Context3(){
    return(
       <>
        <h1>Context 3</h1>
        <Context4 />
       </>
    )
}
function Context4(){
    const {user} = useContext(UserContext); 
    return(
        <>
        <h1>Context 4</h1>
        <h2>{`hello ${user} again`}</h2>
        </>
    )
}

export default Context1