import React, {Component} from 'react';
import Booklist from '../booklist/Booklist';
import Contacts from '../contacts/Contacts';
import straipsniai from '../../duomenys/Straipsniai';
import Article from '../article/Article'

class Main extends Component{
	constructor (){
		super();
	}
	render(){
	const straipsniaiDuomenys = straipsniai.map( straipsnelis => 
	<Article daiktai=
	{{key:straipsnelis.id,
	title:straipsnelis.title,
	description:straipsnelis.description
	}}/>)

	return (
	<div>
	{straipsniaiDuomenys}
		<p> Testuojam Reacta </p>
			<Contacts name='Jolita' email='Gmail' initialAge={17}/>
		<Booklist />
	</div>
	)	
	}
}
export default Main