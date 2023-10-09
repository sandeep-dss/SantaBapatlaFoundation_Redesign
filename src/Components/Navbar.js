import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <img id="logo" src="/sd1.png" alt="logo"></img>
			<button className="name bg-blue-600 p-3 px-7 text-white font-bold rounded-lg">Donate</button>
            <h3 id="title" className="text-2xl font-medium">SantaBapatlaFoundation</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Vision</a>
				<a href="/#">Gallery</a>
                <a href="/#">Donate</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav> 
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;