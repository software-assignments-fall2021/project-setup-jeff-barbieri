import './MyMannequin.css';
import React from 'react';
import { useState } from 'react';
import mannequinIMG from './mannequin.png';


const MyMannequin = () => {


    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        alert("Mannequin Measurments Updated");
    }
    

    return(
        <>
        <div className='container'>
            <h1 className='HeadingText'>My Mannequin</h1>
            </div>
        <div className='container'>
            <img className='Images' src={mannequinIMG} alt="Mannequin"/>
         </div>   

           
            <div className='container'>
            <form onSubmit={handleSubmit}>
            <label>Sex:
                <select
                type="text"
                name="sex"
                value={inputs.sex||" "}
                onChange={handleChange}
                className='select'>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </label>
            <label>Height:
                <input
                className='input'
                type="text"
                name="height"
                value={inputs.height || " "}
                onChange={handleChange}
                />
            </label>
            <label>Shirt Size:
                <input
                className='input'
                type="text"
                name="shirtSize"
                value={inputs.shirtSize || " "}
                onChange={handleChange}
                />
            </label>
            <label>Pants Size:
                <input
                className='input'
                type="number"
                name="pantsSize"
                value={inputs.pantsSize|| " "}
                onChange = {handleChange}
                />
            </label>
            <label>Jacket Size:
                <input
                className="input"
                type="number"
                name="jacketSize"
                value={inputs.jacketSize||" "}
                onChange={handleChange}
                />
            </label>
            <label>Waist:
                <input
                className='input'
                type="number"
                name="waist"
                value={inputs.waist||" "}
                onChange={handleChange}
                />
            </label>
            <label>Weight:
                <input
                className='input'
                type="number"
                name="wieght"
                value={inputs.weight||" "}
                onChange={handleChange}
                />
            </label>
            <label>Body Type:
                <select
                className='select'
                type="text"
                name="bodyType"
                value={inputs.bodyType||" "}
                onChange={handleChange}>
                    <option value = "ectomorph">Ectomorph</option>
                    <option value = "mesomorph">Mesomorph</option>
                    <option value = "endomorph">Endomorph</option>
                </select>
            </label>
            <input type="submit" value="Submit"/>
        </form>
            </div>
            </>
    )
}


export default MyMannequin; 
