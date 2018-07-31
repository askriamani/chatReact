import React, { Component } from 'react';
import 'bulma/css/bulma.css'




var createReactClass = require('create-react-class');



var arrayTab = [];

export default class MessageInput extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			message: "",
			isTyping: false
		};

	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.sendMessage()
		this.setState({ message: "" })
	}

	sendMessage = () => {
		this.props.sendMessage(this.state.message)

	}

	componentWillUnmount() {
		this.stopCheckingTyping()
	}

	sendTyping = () => {
		this.lastUpdateTime = Date.now()
		if (!this.state.isTyping) {
			this.setState({ isTyping: true })
			this.props.sendTyping(true)
			this.startCheckingTyping()
		}
	}

	/*
	*	startCheckingTyping
	*	Start an interval that checks if the user is typing.
	*/
	startCheckingTyping = () => {
	
		console.log("Typing");
		this.typingInterval = setInterval(() => {
			if ((Date.now() - this.lastUpdateTime) > 300) {
				this.setState({ isTyping: false })
				this.stopCheckingTyping()
			}
		}, 300)
	}

	/*
	*	stopCheckingTyping
	*	Start the interval from checking if the user is typing.
	*/
	stopCheckingTyping = () => {
		console.log("Stop Typing");
		if (this.typingInterval) {
			clearInterval(this.typingInterval)
			this.props.sendTyping(false)
		}
	}


	render() {
	
		var Hello = createReactClass({
			render: function() {
				var namesList = arrayTab.map(function(name){
								console.log(name);
								return <li ><a>{name}</a></li>;
							  })
		
				return  <ul>{ namesList }</ul>
				
			
			}
		});
	
			
	
		
		

		const { message } = this.state
		return (
		
			<div className="message-input">
			
			<div class="tabs is-large">
		<Hello />
	
		</div>	
	
				<form
					
					onSubmit={this.handleSubmit}
					className="message-form">

					<input
						id="message"
						ref={"messageinput"}
						type="text"
						class="input is-info"
						value={message}
						autoComplete={'off'}
						placeholder="Type something interesting"
						onKeyUp={e => { e.keyCode !== 13 && this.sendTyping() }}
						onChange={
							({ target }) => {
								this.setState({ message: target.value })
							}
						}
					/>

					<button class="button is-link"
						disabled={message.length < 1}
						type="submit"

					> Send </button>
				</form>

			</div>
		);
	}
}
