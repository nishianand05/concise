import React from "react";
import MessageList from '../containers/MessageList';
import UserAside from './UserAside';


const MessageTimeline = props => {
	return (
		<div className="row justify-content-around my-5">
			<UserAside 
				profileImageUrl={props.profileImageUrl}
				username={props.username}
				/>
			<MessageList/>
		</div>
	)
} 

export default MessageTimeline;