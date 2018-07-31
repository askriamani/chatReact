import React from 'react';
import 'bulma/css/bulma.css'
var createReactClass = require('create-react-class');



var arrayTab = [];
export default function({name, numberOfUsers}) {
	var Hello = createReactClass({
		render: function() {
			var namesList = arrayTab.map(function(name){
							console.log(name);
							return <li ><a>{name}</a></li>;
						  })
	
			return  <ul>{ namesList }</ul>
		
		}
	});
	return (
		<div className="chat-header">
			<div className="user-info">
				<div className="user-name">{name}</div>
				<div className="status">
				<div class="tabs is-large">
				<Hello />
			
				</div>
					<div className="indicator"></div>

					<span>{numberOfUsers ? numberOfUsers : null}</span>
				</div>
			</div>
			
		</div>
	);
	
}