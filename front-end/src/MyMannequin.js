import './MyMannequin.css';
import React from 'react';
import { useState } from 'react';



const MyMannequin = () => {
    const initialInputs = Object.freeze({
        sex:'',
        height:'',
        shirtSize:'',
        pantsSize: '',
        jacketSize: '',
        waist: '',
        weight:'',
        bodyType:'',
    })

    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        setInputs({...inputs,})
    };

    const handleSubmit = (event)=> {
        event.preventDefault();
        alert('Mannequin updated');
    }
    

    return(
        <>
        <div className='container'>
            <h1 className='HeadingText'>My Mannequin</h1>
            </div>
        <div className='container'>
        <iframe src="https://clara.io/embed/3832af86-0c6c-4909-a17e-e95ff48312e7?renderer=webgl" width="271" height="353" ></iframe>
         </div>   

           
            <div className='container'>
            <form onSubmit={handleSubmit}>
            <label>Sex:
                <select
                name = "sex"
                onChange={handleChange}
                className='select'>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </label>
            <label>Height:
                <input
                className='input'
                name="height"
                onChange={handleChange}
                />
            </label>
            <label>Shirt Size:
                <input
                className='input'
                name="shirtSize"
                onChange={handleChange}
                />
            </label>
            <label>Pants Size:
                <input
                className='input'
                name="pantsSize"
                onChange = {handleChange}
                />
            </label>
            <label>Jacket Size:
                <input
                className="input"
                name="jacketSize"
                onChange={handleChange}
                />
            </label>
            <label>Waist:
                <input
                className='input'
                name="waist"
                onChange={handleChange}
                />
            </label>
            <label>Weight:
                <input
                className='input'
                name="wieght"
                onChange={handleChange}
                />
            </label>
            <label>Body Type:
                <select
                className='select'
                name="bodyType"
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