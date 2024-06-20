import React, { useState } from 'react';
import "../styles/customerCreateArea.css";
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Link } from 'react-router-dom';
function CustomerCreateArea(props) {
    // State to store form data
    const [formData, setFormData] = useState({
        registrationNumber: '',
        ownerId: '',
        businessName: '',
        city: '',
        address: '',
        phoneNumber: ''
    });
    


    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);
        // Here you would usually send the formData to a server or some other handling function
            
    };
    
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
        
    };
    
    const handleClose = () => {
        setState({ ...state, open: false });
    };
    
    return (
        <>
        
        <Zoom in={props.isExpand}>
            <form className='form-container' onSubmit={handleSubmit}>
                <h1 style={{fontSize : "25px", color: "black"}}>Let's talk Business</h1>
                <h2 style={{fontSize : "15px"}}>Your essential information will be displayed on your documents. <br />
                    (Feel free to modify it at your convenience).</h2>
                <br /> <hr />
                <label htmlFor="businessRegistrationNumber" >Business registration number:</label>
                <input
                    type="text"
                    id="businessRegistrationNumber"
                    placeholder='Enter your Business registration'
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    required
                    />

                <label htmlFor="ID">ID:</label>
                <input
                    type="text"
                    id="ownerId"
                    name="ownerId"
                    value={formData.ownerId}
                    placeholder='Enter your ID'
                    onChange={handleChange}
                    required
                    />

                <label htmlFor="businessName">Business Name:</label>
                <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    placeholder='Enter your Business name'
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    />


                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    placeholder="Enter your City"
                    onChange={handleChange}
                    required
                    />


                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder='Enter your address'
                    value={formData.address}
                    onChange={handleChange}
                    required
                    />



                <label htmlFor="mobilePhoneNumber">Mobile Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    placeholder="Enter your Phone Number"
                    onChange={handleChange}
                    required
                    />
                
            
                <Button style={{backgroundColor: "rgb(14, 186, 151)"}} type="submit" onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
                    Submit
                </Button>
                
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message="Form Submited!"
                    key={vertical + horizontal}
                />
            </form>
        </Zoom>
        </>
    );
}

export default CustomerCreateArea;
