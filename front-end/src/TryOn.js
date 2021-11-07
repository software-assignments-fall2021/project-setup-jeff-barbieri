import React from 'react';
import Select from 'react-select';
import './TryOn.css';

const Clothing = (props) => {
	return(
		<section className="clothing">
			<h2 className="clothingHead">{props.heading}</h2>
			<img className="clothingImg" alt={props.alt} src={props.src}/>
            <button className="tryOn" type="button">Try On</button>
		</section>
	)
}

const sizes = [
    { value: 'size-small', label: 'Small' },
    { value: 'size-medium', label: 'Medium' },
    { value: 'size-large', label: 'Large' },
    { value: 'size-Xlarge', label: 'XL'},
    { value: 'size-XXlarge', label: 'XXL'},
]

const sizesCustomStyles = {
    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      borderColor: '#9e9e9e',
      minHeight: '30px',
      height: '30px',
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: '30px',
      padding: '0 6px'
    }),

    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorSeparator: state => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '30px',
    }),
  };

const TryOn = () => {

	return(
		<div className="tryOnPage">
			<div className="heading">Try On</div>

            {/* TODO, in the future this search bar will search through a Clothing database */}
            {/* search bar */}

            <div className="heading2">Try Something On!</div>

            <div class="search-container">
                <form role="search" id="form">
                    <input type="search" id="query" name="q"
                        placeholder="Paste URL Here"
                        aria-label="Search through clothing types">
                    </input>
                    <button>
                        <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
                    </button>
                </form>
                {/* <form>
                    <input type="text" placeholder="Search.." name="search"></input>
                    <button type="submit"><i></i></button>
                </form> */}
            </div>
            {/* TODO mannequin*/}
            <img id="mannequin" src="https://picsum.photos/220/220" alt="Mannequin"></img>
            
            <div className="dropdown-menu">
                <Select defaultValue={{ label: "Select Size", value: 0 }} options={sizes} />
            </div>
            
            <div className="my-btn-group">
            {/* TODO Add to Outfits button */}
            <button id="outfitButton" type="button">Add to Closet</button>
            {/* TODO Add to Outfits button */}
            <button id="outfitButton" type="button">Remove</button>
            {/* TODO Add to Outfits button */}
            <button id="outfitButton" type="button">Add to Outfits</button>
            </div>
			
            <div className="section-heading">Recent Try-Ons</div>

            {/* TODO in the future, we will have to extract these Clothing 
            objects from an API */}

            {/* Recent Try-Ons section */}
            <section className="recents">
				<Clothing heading="Recent Clothing One Name" alt="Clothing One" src="https://picsum.photos/220/220" />
				<Clothing heading="Recent Clothing Two Name" alt="Clothing Two" src="https://picsum.photos/220/220" />
				<Clothing heading="Recent Clothing Three Name" alt="Clothing Three" src="https://picsum.photos/220/220" />
				<Clothing heading="Recent Clothing Four Name" alt="Clothing Four" src="https://picsum.photos/220/220" />
			</section>
		</div>
	)
}

export default TryOn