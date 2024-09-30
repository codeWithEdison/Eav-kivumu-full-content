import React from "react";
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state ={favColor: "red"}
        
    }
    static getDerivedProps(props, state){
        return{
            favoritecolor : props.favColor
        }
    }
    render(){
        return(
            <h1>my favorite color is{this.state.favoritecolor} </h1>
        )
    }
}

export default Header; 