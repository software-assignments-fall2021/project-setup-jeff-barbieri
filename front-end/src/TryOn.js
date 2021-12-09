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
  // displays Tops
  function Recents() {
    console.log("starting recents function")
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch("/try-on")
            .then((res) => res.json())
            .then((data) => setData(data.recents))
            .catch(console.error);
    }, []);
    console.log(data)
    if (data) {
        console.log("data exists");
        return (
            <React.Fragment>
                {data.map((recent) => (
                    <Clothing
                        heading = {recent.heading}
                        alt = {recent.alt}
                        src = "https://picsum.photos/220/220"
                    />
                ))}
            </React.Fragment>
        );
    }
    return null;
  }

  // search function for Apparel 
  function Apparel() {
    console.log("starting apparel function")
    const [data, setData] = React.useState([]);

    // searchTerm: input, setSearchTerm: data
    const [searchTerm, setSearchTerm] = React.useState("");

    React.useEffect(() => {
        fetch("/apparel")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(console.error);
    }, []);
    console.log(data)
    if (data) {
        console.log("data exists");
        return (
            <React.Fragment>
                <form id="form">
                  <input type="text" id="query" name="q"
                      placeholder="Search Uniqlo Clothing..."
                      aria-label="Search Uniqlo Clothing"
                      onChange={(event)=>{
                        setSearchTerm(event.target.value);
                      }}
                  />
                </form>
                {data.filter((val)=>{
                  if(searchTerm==""){
                    return null
                  }
                  else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                  }
                }).map((val, key) => (
                    <Clothing
                        key = {key}
                        heading = {val.name.replace('-', ' ')}
                        alt = {val.name}
                        // TODO fix this image not loading
                        src = {"../../database" + val.src}
                    />
                ))}
            </React.Fragment>
        );
    }
    return null;
  }
  

	return(
		<div className="tryOnPage">
			<div className="heading">Try On</div>

            
            <div className="heading2">Try Something On!</div>

            {/* Brian TODO: diplay Uniqlo clothing according to search filter */}
            <section className="apparel">
              {Apparel()}
            </section>

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
              {Recents()}
            </section>
		</div>
	)
}

export default TryOn