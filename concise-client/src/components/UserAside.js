import React from "react";
import DefaultProfileImg from "../images/default-user.svg";

const UserAside = ({profileImageUrl, username}) => (
	<aside className="col-sm-3">
		<div className="panel panel-default">
			<div className="panel-body d-flex flex-column align-items-center">
				<img 
					src={profileImageUrl || DefaultProfileImg} 
					alt={username} 
					width="200"
					height="200"
					className="img-thumbnail"/>
				<p className=' badge badge-pill badge-info my-3 p-2'>{`@${username}`}</p>
			</div>
		</div>
	</aside>
)

export default UserAside;