import React from "react";
import {Link} from "react-router-dom";
import homeVideo from "../images/homeVideo.mp4"

const Homepage = ({currentUser}) => {
	if(!currentUser.isAuthenticated){
		return (
			<div>
				<video playsInline autoPlay muted loop id="myHomeVideo">
					<source src={homeVideo} type="video/mp4"/>
				</video>
				<div className="home-hero">	
					<h1>What's Happening?</h1>
					<h4>New to Concise?</h4>
					<Link to="/signup" className="btn btn-primary">
					Sign up here
					</Link>
				</div>
			</div>
		)
	}
	
	return (
		<div>
			<h1>You made it</h1>
		</div>
	)
}

export default Homepage;