import React, {Component} from "react";

class AuthForm extends Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			email: '',
			username: '',
			password: '',
			profileImageUrl: ''
		}
	}
	
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	handleSubmit = e => {
		e.preventDefault();
		const authType = this.props.signUp ? "signup" : "signin";
		this.props
			.onAuth(authType, this.state)
			.then(() => {
			this.props.history.push("/");
		})
			.catch(() => {
			return;
		})
	}
	
	render(){
		
		const {
			email, 
			username, 
			profileImageUrl
		} = this.state;
		
		const {
			heading, 
			buttonText, 
			signUp, 
			errors, 
			removeError, 
			history
		} = this.props;
		
		history.listen(() => {
			removeError();
		});
		
		return(
			<div>
				<div className="row justify-content-md-center text-center my-4">
					<div className="col-md-6">
						<form onSubmit={this.handleSubmit}>
							<h2 className="my-5">{heading}</h2>
							{
								errors.message && (
									<div className="alert alert-danger">
										{errors.message}
									</div>
								)
							}
							
							<input
								className="form-control"
								placeholder="Email"
								id="email"
								name="email"
								onChange={this.handleChange}
								value={email}
								type="text"
								/>
							
							<input
								className="form-control"
								placeholder="Password"
								id="password"
								name="password"
								onChange={this.handleChange}
								type="password"
								/>
							
							
							{
								signUp && (
									<div>
										<input
											className="form-control"
											placeholder="Username"
											id="username"
											name="username"
											onChange={this.handleChange}
											value={username}
											type="text"
											/>

										<input
											className="form-control"
											placeholder="Profile Image URL"
											id="profileImageUrl"
											name="profileImageUrl"
											onChange={this.handleChange}
											value={profileImageUrl}
											type="text"
											/>
									</div>
								)
							}
							
							<button 
								type="submit"
								className="btn btn-info btn-block btn-lg my-3">
								{buttonText}
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AuthForm;