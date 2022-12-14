import React, { useContext, useState } from 'react'
import { usersContext } from '../../App';
import './LoginPage.css'
import users from "../../Usersfct"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function LoginPage() {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const [popUpLogin,setPopUpLogin] = useState("hide");
    const loginPopUp = ()=>{
        setPopUpLogin("login_popup")
        setTimeout(()=>setPopUpLogin("hide"),2000)
    }
    const { user, setUser } = useContext(usersContext)

    const loginClick = async () => {
        await axios.post('/login', {
            email:userName ,
            password: password
          })
          .then(function (response) {
            if(response.data){
            setUser( response.data[0])
            console.log(response.data[0]);
                // setLog(true)
                navigate('/spotify')
                localStorage.setItem("token",JSON.stringify("Bearer "+response.data[1]))
            }
            console.log(response);
          })
          .catch(function (error) {
            loginPopUp();
            console.log(error);
          });
       
        


        // users.map((v) => {
        //     if (userName == v.name && password == v.password) {
        //         setUser({ name: userName, password: password })
        //         setLog(true)
        //         navigate('/spotify')
        //         console.log(user);
        //     }
        //     else{
        //         loginPopUp();
        //     }
        // })

    }


    return (
        <div className='loginPage'>
            {/* <img id="img2" src="data:image/jpeg;base64,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" alt="" /> */}
            <div className='login_container'>
                <h2>LOGIN</h2>

                <input className='login' type="text" placeholder='username'
                    onInput={(e) => setUserName(e.target.value)}
                />
                <input className='login' type="password" placeholder='password'
                    onInput={(e) => setPassword(e.target.value)}
                />
                <button id='button_login' onClick={loginClick}>Login</button>

                <div className='sign-up'>Don't have an account? <Link to ="/RegisterPage">Sign Up</Link></div>
            </div>

            
            <div className={popUpLogin}>
                <h3>login failed</h3>
                <p>username or password incorrect</p>
            </div>

       

        </div>
    )
}

export default LoginPage