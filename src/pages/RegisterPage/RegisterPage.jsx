import React from 'react'
import { useState } from 'react'
import './RegisterPage.css'
import axios from "axios";
import { useEffect } from 'react';





function RegisterPage() {


    // const [newUser,setNewUser] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.fname.value);

        // useEffect(() => {
        axios.post('/sign-up', {
            "fname": e.target.fname.value,
            "lname": e.target.lname.value,
            "email": e.target.email.value,
            "username": e.target.username.value,
            "password": e.target.password.value,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        // },[]);

    }



    return (
        <div className='registerPage'>
            <form className='register_container' onSubmit={onSubmit}>
                <h1> Register</h1>
                <input name='fname' required className='login' type="text" placeholder='First Name' />
                <input name='lname' required className='login' type="text" placeholder='Last Name' />
                <input name='email' required className='login' type="text" placeholder='Email' />
                <input name='username' required className='login' type="text" placeholder='UserName' />
                <input name='password' required className='login' type="password" placeholder='Password' />

                {/* <input className='login' type="password" placeholder='Confirm Password'
                // onInput={(e) => setPassword(e.target.value)}
                /> */}
                <button id='button_login'>submit</button>

            </form>

        </div>
    )
}

export default RegisterPage