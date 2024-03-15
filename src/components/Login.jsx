import { useState } from "react"
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData]=useState({
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData(prevData=>({
            ...prevData,
            [name]:value
        }))
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div>
        <h2>Login</h2>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" value={formData.password} onChange={handleChange} required />
            <button type="submit" onSubmit={handleSubmit}>Login</button>
            <p>New user, <Link to='/signup'><span>SignUp</span></Link></p>
        </form>
    </div>
  )
}

export default Login