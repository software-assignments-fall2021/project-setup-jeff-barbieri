import React from 'react';
import './MyCloset.css';

const Clothing = (props) => {
	return(
		<section className="clothing">
			<h2 className="clothingHead">{props.heading}</h2>
			<img className="clothingImg" alt={props.alt} src={props.src}/>
			<p>{props.details}</p>
		</section>
	)
}

const MyCloset = () => {

    function addOutfit(){
        console.log("Congrats! This Outfit has been added to My Outfits.")
    }

    // function that hides and shows clothing tab content
    function tabHide(){
        let tabNames = new Array("tops", "bottoms", "accessories", "footwear");
        let currentTab; 
        let tabs = document.getElementsByClassName('tab-item'); 
        let i = 0; // index
        for(i = 0; i<tabs.length; i++){
            // get background color of each tab
            let bgcolor = window.getComputedStyle(tabs[i]).backgroundColor;
            // if not white (selected): show
            if (bgcolor.localeCompare("rgba(0, 0, 0, 0)") !== 0){
                currentTab = tabNames[i]; // current tab by id name
                let show = document.getElementsByClassName(currentTab);
                show[0].style.display = 'block'; // make visible
            }
            // if white (not selected): hide
            else{
                currentTab = tabNames[i];
                let hide = document.getElementsByClassName(currentTab);
                hide[0].style.display = 'none'; // hide
            }
        }
    }

	return(
		<div className="myCloset">
			<div className="heading">My Closet</div>

            {/* TODO mannequin*/}
            <div id="mannequin">
                <img src="https://picsum.photos/220/220" alt="Mannequin"></img>
            </div>

            {/* TODO Add to Outfits button */}
            <form id="outfitButton" onSubmit={addOutfit}>
                <button type="submit">Add to Outfits</button>
            </form>
			
            {/* tab dropdown menu */}
            <div className="menu">
                <div className="tab-item" id="tops-tab" onClick={tabHide}>
                    Tops
                </div>
                <div className="tab-item" id="bottoms-tab" onClick={tabHide}>
                    Bottoms
                </div>
                <div className="tab-item" id="accessories-tab" onClick={tabHide}>
                    Accessories
                </div>
                <div className="tab-item" id="footwear-tab" onClick={tabHide}>
                    Footwear
                </div>
            </div>

            {/* TODO in the future, we will have to extract these Clothing 
            objects from an API */}

            {/* tops section */}
            <section className="tops">
                {/* hideable content */}
				<Clothing heading="Top One Name" alt="Clothing One" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Top Two Name" alt="Clothing Two" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Top Three Name" alt="Clothing Three" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Top Four Name" alt="Clothing Four" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
			</section>

            {/* bottoms section */}
            <section className="bottoms">
                {/* hideable content */}
				<Clothing heading="Bottom One Name" alt="Clothing One" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Bottom Two Name" alt="Clothing Two" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Bottom Three Name" alt="Clothing Three" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Bottom Four Name" alt="Clothing Four" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
            </section>

            {/* accessories section */}
            <section className="accessories">
                {/* hideable content */}
				<Clothing heading="Accessories One Name" alt="Clothing One" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Accessories Two Name" alt="Clothing Two" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Accessories Three Name" alt="Clothing Three" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Accessories Four Name" alt="Clothing Four" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
			</section>

            {/* footwear section */}
            <section className="footwear">
                {/* hideable content */}
				<Clothing heading="Footwear One Name" alt="Clothing One" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Footwear Two Name" alt="Clothing Two" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Footwear Three Name" alt="Clothing Three" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
				<Clothing heading="Footwear Four Name" alt="Clothing Four" src="https://picsum.photos/220/220" details="Shirt — Lorem, Pants — Ipsum, Shoes — Dolor, Jacket — Sit Amet, Belt — Consectetur."/>
			</section>


		</div>
	)
}

export default MyCloset