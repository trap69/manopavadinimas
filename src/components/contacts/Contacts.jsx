import React, { Component } from 'react';

class Contacts extends Component {
	constructor(props){
		super();
		this.state = {
			age: props.initialAge
		}
	}
	makeOlder(){
		this.setState ({
			age: this.state.age +20
		})
		console.log(this.state.age)
	}
	render(){
		return (
			<div>
				<p> Mano vardas: {this.props.name} </p>
				<p> Mano pastas: {this.props.email} </p>
				<p> Amzius: {this.state.age}</p>
				<button onClick={this.makeOlder.bind(this)} className='btn btn-info'> opa opa</button>
			</div>
		)
	}
}
export default Contacts