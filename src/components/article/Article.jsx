import React , {Component} from 'react';

class Article extends Component {
	constructor(props) {
		super();
		console.log(props);
	}
	
	render() {
		return(
		<div>
		<p>{this.props.daiktai.title}</p>
		<p>{this.props.daiktai.description}</p>
		</div>
		)
	}
}
export default Article