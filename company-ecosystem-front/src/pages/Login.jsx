import React, {useState} from 'react';
import s from './styles/Login.module.css'
import LoginForm from "../compontents/LoginForm";
import Saly from "../img/login/Saly.svg"
import {HOME_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const Login = ({setIsUserAuth}) => {

    const navigate = useNavigate();

    async function login(email, password) {
        console.log(email)
        console.log(password)
        let result = await fetch("https://localhost:7032/Account/authenticate", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({email: email, password: password}),
        });
        if(result.status === 200){
            setIsUserAuth(true)
            result = await result.json();
            localStorage.setItem("userEmail", JSON.stringify(result.email));
            navigate(HOME_ROUTE)
        } else {
            alert("Вы ввели неправильные данные");
        }
    }


    return (
        <div className={s.loginContainer}>
            <div className={s.content}>
                <div className={s.leftColumn}>
                    <div className={s.textBlock}>
                        <h2 className={s.signIn}>Sign in to </h2>
                        <h3 className={s.companyEcosystem}>Company Ecosystem </h3>
                        <span className={s.description}>Here you can <span className={s.manage}>manage</span> all the important <br/>parts of the system!  </span>
                    </div>
                    <div className={s.imageContainer}>
                        <img src={Saly} alt="Saly"/>
                    </div>
                </div>
                <div className={s.rightColumn}>
                    <LoginForm login={login}/>
                </div>
            </div>
        </div>
    );
};

export default Login;