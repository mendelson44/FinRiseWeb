import React from "react";
import {Link} from 'react-router-dom'
import Clock from "./Clock"
import "../styles/header.css"
function Header() {
	
	return (
		<>
			<nav>
				<Link style={{textDecoration :"none"}} to="/">
					<div className="logo-container">
						<img src="src/assets/logo.png" alt="FinRise Logo" />
						<h1>FinRise</h1>
					</div>
				</Link>
				
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/usersignup">Sign Up</Link>
					</li>
				</ul>
				<Clock/>
			</nav>
		</>
	);
}

export default Header;
