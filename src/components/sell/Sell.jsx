import React, {Component} from 'react';

class Sell extends Component {
	constructor(props){
		super()
		this.state = {
			message: '10% discount TODAY !!!'
		}
	}
	clickHandler (){
		this.setState ({
			message: 'Only YOU - 20% discount !!!'
		})
		console.log(this);
	}
	render(){
		return(
			<div>
			<div>{this.state.message}</div>
			<button className='btn btn-warning' onClick={this.clickHandler.bind(this)}>Check..</button>
			</div>
		)
	}
}
export default Sell