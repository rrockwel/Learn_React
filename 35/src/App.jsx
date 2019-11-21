import React, {Component} from 'react';
import './styles.css'

class App extends Component {
	constructor(){
		super()
		this.state={}
	}

	componentDidMount(){
		// Get the data I need to correctly display
	}

	UNSAFE_componentWillReceiveProps(nextProps){ // Will be Removed in React 17
		if(nextProps.whatever != this.props.whatever){
			// do something important here
		}
	}

	shouldComponentUpdate(nextProps, nextState){
		// return true if want it to update
		// return false if don't want it to update
	}

	componentWillUnmount(){
		// teardown/cleanup code before component disappears
		// e.g. remove event listeners
	}

	render(){
		return (
			<div>
				Code goes here
			</div>
		)
	}
}

export default App;
