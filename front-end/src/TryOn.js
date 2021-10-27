import React from 'react';
import './TryOn.css';

const Clothing = (props) => {
	return(
		<section className="clothing">
			<h2>{props.heading}</h2>
			<img alt={props.alt} src={props.src}/>
			<p>{props.details}</p>
		</section>
	)
}

const MyCloset = () => {
	return(
		<div className="tryOn">
			<div className="heading">Try On</div>
			<section>
				<Clothing heading="Clothing One Name" alt="Clothing One" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Clothing Two Name" alt="Clothing Two" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Clothing Three Name" alt="Clothing Three" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Clothing Four Name" alt="Clothing Four" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
			</section>
		</div>
	)
}

export default MyCloset