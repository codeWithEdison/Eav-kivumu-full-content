// functinal component
import './login.css'
const Login = (props) =>{
    const sayHello = (name) => {
        alert(`Hello  ${name} !`);
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label htmlFor="">{props.title}</label> <br />
                <input type="text" placeholder={props.title}/> <br />
                <input type="password" placeholder="password"/> <br />
                <button onMouseOver={()=> sayHello('edison')}  type="submit">{props.btnName}</button>
            </form>
        </div>
    )
    
}
export default Login; 