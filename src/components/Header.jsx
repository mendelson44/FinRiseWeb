import React from "react";
import {Link} from 'react-router-dom'
import Clock from "./Clock"
import "../styles/header.css"
function Header() {
	
	return (
		<>
			<nav>
				
				
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/">Our Services</Link>
					</li>
					<li>
						<Link to="/">Contact Us</Link>
						
					</li>
					
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/usersignup">Sign Up</Link>
					</li>
				</ul>

			</nav>
			<Clock/>
		</>
	);
}

export default Header;
