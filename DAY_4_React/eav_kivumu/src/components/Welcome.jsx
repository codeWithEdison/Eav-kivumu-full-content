import React from 'react'
// import style from './components.module.css' 

const Welcome = (props) => {
    // let myStyle = {
    //     color: "red",
    //       backgroundColor: "#000"
    // }
  return (
    <div>
        {/* <h2 className={style.home}></h2>  */} 
        <h1 style={{color: "yellow", backgroundColor: "#fff"}}>welcome</h1>
        {props.name ? <h3>{props.name}</h3>: <h3>User</h3>}
    </div>
  )
}

export default Welcome