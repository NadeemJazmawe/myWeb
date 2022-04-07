import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import "./Header.css"

export default function Header() {

    const [activeTab, setActiveTab] = useState("Home");

    const location = useLocation();

    useEffect( () => {
        if(location.pathname === "/" || location.pathname === "/home"){
            setActiveTab("home");
        }else if(location.pathname === "/about"){
            setActiveTab("about")
        }else if(location.pathname === "/resume"){
            setActiveTab("resume")
        }else if(location.pathname === "/project"){
            setActiveTab("project")
        }else if(location.pathname === "/contact"){
            setActiveTab("contact")
        }else if(location.pathname == "/skill+abilities"){
            setActiveTab("skill+abilities")
        }
    })

  return (
    <div className='header'>
 
        <p className='logo'>
            Nadeem Jazmawe
        </p>

        <div className='header-right'>
            <Link to='/'>
                <p 
                    className={`${activeTab ==="home" ? "active" : ""}`} 
                    onClick={ () => { setActiveTab('home')}}>
                    Home
                </p>
            </Link>

            <Link to='/about'>
                <p
                    className={`${activeTab === "about" ? "active" : ""}`}
                    onClick = { () => setActiveTab('about')}>
                    About Me
                </p>
            </Link>

            <Link to='/resume'>
                <p
                    className={`${activeTab === "resume" ? "active" : ""}`}
                    onClick = { () => setActiveTab('resume')}>
                    Resume
                </p>
            </Link>

            <Link to='/skill+abilities'>
                <p
                    className={`${activeTab === "skill+abilities" ? "active" : ""}`}
                    onClick = { () => setActiveTab('skill+abilities')}>
                    Skills & Abilities
                </p>
            </Link>
            
            <Link to='/project'>
                <p
                    className={`${activeTab === "project" ? "active" : ""}`}
                    onClick = { () => setActiveTab('project')}>
                    Projects
                </p>
            </Link>

            <Link to='/contact'>
                <p
                    className={`${activeTab === "contact" ? "active" : ""}`}
                    onClick = { () => setActiveTab('contact')}>
                    Contact
                </p>
            </Link>
            
            
        </div>

    </div>
  )
}
