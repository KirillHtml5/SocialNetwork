import React from 'react';
import c from './Header.module.css'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean,
    login: null
}

const Header = (props: HeaderPropsType) => {
    return <header className={c.header}>
        <img
            src='https://static-s.aa-cdn.net/img/gp/20600011295035/ybP_5OMhTKL1xFZP2-M6wIjqSuzz-SkrSAqxV-4zPjB25Qh0tD1sGI08UJSvuIJw4nsK=s300?v=1'/>
        <div className={c.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;