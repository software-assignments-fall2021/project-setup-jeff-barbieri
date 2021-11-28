import React from 'react';
import './MyCloset.css';

const Clothing = (props) => {
	return(
		<section className="clothing">
			<h2 className="clothingHead">{props.heading}</h2>
			<img className="clothingImg" alt={props.alt} src={props.src}/>
            <button className="tryOn" type="button">Try On</button>
		</section>
	)
}

const MyCloset = () => {

    // displays Tops
    function Tops() {
        const [data, setData] = React.useState([]);
        React.useEffect(() => {
            fetch("/my-closet")
                .then((res) => res.json())
                // .then(setData)
                .then((data) => setData(data.tops))
                .catch(console.error);
        }, []);
    
        if (data) {
            return (
                <React.Fragment>
                    {data.map((top) => (
                        <Clothing
                            heading = {top.heading}
                            alt = {top.alt}
                            src = "https://picsum.photos/220/220"
                        />
                    ))}
                </React.Fragment>
            );
        }
        return null;
    }

    // display Bottoms
    function Bottoms() {
        const [data, setData] = React.useState([]);
        React.useEffect(() => {
            fetch("/my-closet")
                .then((res) => res.json())
                // .then(setData)
                .then((data) => setData(data.bottoms))
                .catch(console.error);
        }, []);
    
        if (data) {
            return (
                <React.Fragment>
                    {data.map((bottom) => (
                        <Clothing
                            heading = {bottom.heading}
                            alt = {bottom.alt}
                            src = "https://picsum.photos/220/220"
                        />
                    ))}
                </React.Fragment>
            );
        }
        return null;
    }

    // display Accessories
    function Accessories() {
        const [data, setData] = React.useState([]);
        React.useEffect(() => {
            fetch("/my-closet")
                .then((res) => res.json())
                // .then(setData)
                .then((data) => setData(data.accessories))
                .catch(console.error);
        }, []);
    
        if (data) {
            return (
                <React.Fragment>
                    {data.map((accessory) => (
                        <Clothing
                            heading = {accessory.heading}
                            alt = {accessory.alt}
                            src = "https://picsum.photos/220/220"
                        />
                    ))}
                </React.Fragment>
            );
        }
        return null;
    }

    // display Footwear
    function Footwear() {
        const [data, setData] = React.useState([]);
        React.useEffect(() => {
            fetch("/my-closet")
                .then((res) => res.json())
                // .then(setData)
                .then((data) => setData(data.footwear))
                .catch(console.error);
        }, []);
    
        if (data) {
            return (
                <React.Fragment>
                    {data.map((fw) => (
                        <Clothing
                            heading = {fw.heading}
                            alt = {fw.alt}
                            src = "https://picsum.photos/220/220"
                        />
                    ))}
                </React.Fragment>
            );
        }
        return null;
    }
    
    


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
            // if not lightgray (selected): show
            if (bgcolor.localeCompare("rgb(211, 211, 211)") !== 0){
                currentTab = tabNames[i]; // current tab by id name
                let show = document.getElementsByClassName(currentTab);
                show[0].style.display = 'block'; // make visible
            }
            // if lightgray (not selected): hide
            else{
                currentTab = tabNames[i];
                let hide = document.getElementsByClassName(currentTab);
                hide[0].style.display = 'none'; // hide
            }
        }
    }

	return(
		<div className="myCloset">
			<div className="heading">
                My Closet
            </div>

            {/* TODO mannequin*/}
            <img id="mannequin" src="https://picsum.photos/220/220" alt="Mannequin"></img>

            {/* TODO Add to Outfits button */}
            <button id="outfitButton" type="button">Add to Outfits</button>
			
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

            {/* TODO, in the future this search bar will search through a Clothing database */}
            {/* search bar */}
            <div class="search-container">
                <form role="search" id="form">
                    <input type="search" id="query" name="q"
                        placeholder="Search..."
                        aria-label="Search through clothing types">
                    </input>
                    <button id="search-go">
                        <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
                    </button>
                </form>
            </div>

            {/* tops section */}
            <section className="tops">
                {/* hideable content */}
                {Tops()}
			</section>

            {/* bottoms section */}
            <section className="bottoms">
                {/* hideable content */}
                {Bottoms()}
            </section>

            {/* accessories section */}
            <section className="accessories">
                {/* hideable content */}
				{Accessories()}
            </section>

            {/* footwear section */}
            <section className="footwear">
                {/* hideable content */}
				{Footwear()}
			</section>


		</div>
	)
}

export default MyCloset