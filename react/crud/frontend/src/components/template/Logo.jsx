import React from 'react'
import Logo from '../../assets/imgs/logo.png'
import './Logo.css'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={Logo} alt="logo"/>
        </Link>
    </aside>