import {useState} from "react"
import axios from "axios"
import './App.css';
function App() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const registerUser = async(e) =>{
        e.preventDefault()
      try{
        
        const resp = await axios.post("http://localhost:4600/register",{name,email,password})
        const data = await resp
        console.log(data)


      }catch(err){
        console.log(err)
      }
    }

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={registerUser}>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

        <input type="submit" value="submit"/>


      </form>

    </div>
  );
}

export default App;
