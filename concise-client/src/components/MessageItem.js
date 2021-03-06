import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

import DefaultProfileImg from '../images/default-user.svg';

const MessageItem = ({date, profileImageUrl, text, username, removeMessage, isCorrectUser}) => (
	<div>
		<li className="list-group-item mb-2">
			<img 
				src={profileImageUrl || DefaultProfileImg} 
				alt={username} 
				height="100" 
				width="100" 
				className="timeline-image"
				/>
			
			<div className="message-area w-100">
				<Link to='/'>@{username}&nbsp;</Link>
				<span className="text-muted">
					<Moment 
						className="text-muted" 
						format="Do MMM YYYY">
						{date}
					</Moment>
				</span>
				<p>{text}</p>
				
				{ isCorrectUser && (
					<a 
						href
						className="btn btn-danger float-right" 
						onClick={removeMessage}>
						Delete
					</a>
				)}
			</div>
		</li>
	</div>
)

export default MessageItem;