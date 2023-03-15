import React from 'react'
import { NavLink } from "react-router-dom";

export const Nav = () => {

    const usersLocal = JSON.parse(localStorage.getItem("usuarioLogado"));

    return (
        <nav className="nav">
            <ul className="ulNav">
                <li className="liNav" onClick={()=> localStorage.removeItem("usuarioLogado")}><NavLink to="/">Cerrar sesión</NavLink></li>
                <li className="liNav">Sesión iniciada con: {usersLocal.newEmail ? usersLocal.newEmail : usersLocal.email}</li>
            </ul>
        </nav>

    )
}
