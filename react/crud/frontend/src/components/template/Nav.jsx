import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        {/* Refatorar esse código depois */}
        <nav className="menu">
            <Link to="/" className="">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users" className="">
                <i className="fa fa-users"></i> Usuário
            </Link>
        </nav>
    </aside>