import React, {Component} from "react";
import {connect} from "react-redux";
import {postNewMessage} from "../store/actions/messages";

class MessageForm extends Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			message: ""
		};
	}
	
	handleNewMessage = e => {
		e.preventDefault();
		this.props.postNewMessage(this.state.message);
		this.setState({message: ""});
		this.props.history.push("/");
	}
	
	render(){
		return (
			<form onSubmit={this.handleNewMessage}>
				<h2 className="text-center my-5">Add a new message</h2>
				{this.props.errors.message && (
					<div className="alert alert-danger">
						{this.props.errors.message}
					</div>
				)}
				<input 
					type="text" 
					className="form-control p-3" 
					value={this.state.message}
					onChange={
						e => this.setState({message: e.target.value})
					}
					/>
				
				<button 
					type="submit"
					className="btn btn-success btn-block btn-lg my-3">
					Add my message!
				</button>
			</form>
		)
	}
}

function mapStateToProps(state){
	return {
		errors: state.errors
	}
}

export default connect(mapStateToProps, {postNewMessage})(MessageForm);