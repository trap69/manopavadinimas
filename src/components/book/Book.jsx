import React from 'react';
import Style from './book.css';
import Sell from '../sell/Sell';
function Book(){
	return (
	<div>
		<p>cia yra mano komponentas</p>
		<Image />
		<Author/>
		<Title/>
		<Price/>
		<Sell/>
	</div>
	)
}

function Image(){
	return (
		<div>
			<img src="https://thumb.knygos-static.lt/Hl7XEmUbS5eE4s5V8hBG_h7ByUc=/fit-in/320x430/images/books/2353430/1603806453_ka_zino_vejas_3d2s.png"/>
		</div>
	)
}

function Author(){
	return (

		<h3>Amy Harmon</h3>

	)
}

function Title(){
	return (

		<h3>KÀ ÞINO VËJAS</h3>

	)
}

function Price(){
	return (

		<p className='priceTag'>13EU</p>

	)
}
export default Book