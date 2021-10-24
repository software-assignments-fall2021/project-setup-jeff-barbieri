import React from 'react';
import './MyOutfits.css';

const Outfit = (props) => {
	return(
		<section className="outfit">
			<h2>{props.heading}</h2>
			<img alt={props.alt} src={props.src}/>
			<p>{props.details}</p>
		</section>
	)
}

const MyOutfits = () => {
	return(
		<div className="myOutfits">
			<div className="heading">My Outfits</div>
			<section>
				<Outfit heading="Outfit One Name" alt="Outfit One" src="https://picsum.photos/220/220" details="Outfit one details. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
				<Outfit heading="Outfit Two Name" alt="Outfit Two" src="https://picsum.photos/220/220" details="Outfit two details. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
				<Outfit heading="Outfit Three Name" alt="Outfit Three" src="https://picsum.photos/220/220" details="Outfit three details. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
				<Outfit heading="Outfit Four Name" alt="Outfit Four" src="https://picsum.photos/220/220" details="Outfit four details. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
			</section>
		</div>
	)
}

export default MyOutfits