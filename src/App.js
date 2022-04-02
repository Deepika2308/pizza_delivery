import "./styles.css";
import {Link, Route} from "react-router-dom";
import {useState} from "react";

export default function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

let USERS_LIST = [
  {
    id:"100",
    name:"Jakie",
    password:"pass@123",
    emailId:"jack@gmail.com"
  }
]

function HomePage(){
  return (

    <div className="top-nav">
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
           
          </li>
          <li>
            
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <switch>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </switch>
    </div>
  )
}

function SignupPage(){

  let[name,setName] = useState("");
  let[password,setPassword] = useState("");
  let[emailId,setMail] = useState("");
  let[usersList,setUsersList] = useState(USERS_LIST);

  return(
   <div className="signup-form">
    <input id="name" placeholder="User name" onChange={(event) => setName(event.target.value) } ></input>
    <input id="password" placeholder="Password" onChange={(event) => setPassword(event.target.value) }></input>
    <input id="emailId" placeholder="Email id" onChange={(event) => setMail(event.target.value) }></input>
    <button onClick={() => {
      console.log(name);
      console.log(password);
      console.log(emailId);
      let newUser={
        name:name,
        password:password,
        emailId:emailId
      };

      fetch("https://62488f87831c69c687c5b15d.mockapi.io/users",{
        method:"POST",
        body: JSON.stringify(newUser),
        headers:{
          "content-type": "application/json",
        }
      });
      // setUsersList([...usersList,newUser]);
      console.log("users list " +usersList);
    } }>Signup</button>
   </div> 
  )
}

function LoginPage(){
  return(
   <div className="login-form">
    <input id="loginUserName" placeholder="User name"></input>
    <input id="loginPassword" placeholder="Password"></input>
    <button>Login</button>
   </div> 
  )
}