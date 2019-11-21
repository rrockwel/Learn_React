import React, {Component} from 'react';

class TodoList extends Component {
	constructor(){
		super()
		this.state={}
	}

	static getDerivedStateFromProps(props, state){
		// return the new, updated state based upon the props
		// https://reactjs.org/docs/react-component.html#static-getderivedstatefromprop
		// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
	}

	getSnapshotBeforeUpdate(){
		// Create a backup of the current way things are
		// https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
	}
	
	/* THIS IS GOING AWAY
	// componentWillMount(){

	// }
	*/

	componentDidMount(){
		// Get the data I need to correctly display
	}


	/* THIS IS GOING AWAY
	// componentWillReceiveProps(nextProps, nextState){
	// 	if(nextProps.whatever !== this.props.whatever){
	// 		// do something important here
	// 	}
	// }
	*/

	shouldComponentUpdate(nextProps, nextState){
		// Return true if you want it to update
		// Return false if you don't want it to update
	}

	/* THIS IS GOING AWAY
	// componentWillUpdate(){

	// }
	*/

	componentWillUnmount(){
		// Teardown/Cleanup code before component disappears
		// E.g. remove event listeners
	}
	

	render(){
		return (
			<div>
				Code Goes Here
			</div>
		)
	}
}

export default App;