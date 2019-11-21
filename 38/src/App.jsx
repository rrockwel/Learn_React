import React, {Component} from 'react';
import Conditional from './Conditional.jsx'

import './styles.css'

class App extends Component {
	constructor(){
		super()
		this.state={
			unreadMessages: [
				"Call your mom!",
				"New spam email available. All links are definitely safe to click!"
			]
		}
	}

	// &&
	// true && false

	render(){
		return (
			<div className='container'>
				<div className="row">
				{this.state.unreadMessages.length > 0 &&
					<h2>You have {this.state.unreadMessages.length} unread messages!</h2>
				}
				{this.state.unreadMessages.length ===0 && 
					<h2>You have no new messages</h2>
				}
				</div>
			</div>
		)
	}
}

export default App;