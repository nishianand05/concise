import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_MESSAGES, REMOVE_MESSAGE} from '../actionTypes';

export const loadMessages = messages => ({
	type: LOAD_MESSAGES,
	messages
});

export const deleteMessage = id => ({
	type: REMOVE_MESSAGE,
	id
});

export const fetchMessages = () => {
	return dispatch => {
		return apiCall("get", `${process.env.REACT_APP_SERVER_URL}/api/messages`)
		.then(res => {
			dispatch(loadMessages(res))
		})
		.catch(err => {
			dispatch(addError(err.message))
		});
	};
};

export const postNewMessage = text => (dispatch, getState) => {
	let {currentUser} = getState();
	const id = currentUser.user.id;
	return apiCall("post", `${process.env.REACT_APP_SERVER_URL}/api/users/${id}/messages`, {text})
	.then(res => {
		
	})
	.catch(err => dispatch(addError(err.message)));
}

export const removeMessage = (user_id, message_id) => {
	return dispatch => {
		return apiCall(
			"delete", 
			`${process.env.REACT_APP_SERVER_URL}/api/users/${user_id}/messages/${message_id}`)
			.then(() => dispatch(deleteMessage(message_id)))
			.catch(err => dispatch(addError(err.message)));
	}
}



