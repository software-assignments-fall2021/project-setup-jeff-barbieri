import React from 'react';
import './MyOutfits.css';

const Outfit = (props) => {
	return(
		<section class="outfit">
			<h2 class="heading">{props.heading}</h2>
			<img class="image" src={props.src}/>
			<p class="details">{props.details}</p>
		</section>
	)
}

const MyOutfits = (props) => {
	return(
		<div class="heading">
			<h1>My Outfits</h1>
		</div>
		<Outfit heading="Outfit One Name" src="https://picsum.photos/220/220" details="Outfit one details."/>
		<Outfit heading="Outfit Two Name" src="https://picsum.photos/220/220" details="Outfit two details."/>
		<Outfit heading="Outfit Three Name" src="https://picsum.photos/220/220" details="Outfit three details."/>
		<Outfit heading="Outfit Four Name" src="https://picsum.photos/220/220" details="Outfit four details."/>
	)
}

export default MyOutfits;