import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Header from "./components/lifeCycle";

const App = () =>{
  const haveAccount = false; 
  if(haveAccount ){

    return <Login title ="email"  btnName = "login" /> 
  }
  // return <Register/> 
  return <Welcome />   
}
export default App; 
