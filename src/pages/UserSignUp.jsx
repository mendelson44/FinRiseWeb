import { Zoom } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ImageUploader from "../components/ImageUploader";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import BackHeader from "../components/BackHeader";

function SignUp() {
    // State to store form data
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });

    // Hook to navigate to different routes
    const navigate = useNavigate();

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
        navigate('/LoginBusinessDetails');
    };

    return (
        <>
            
            <BackHeader/>
            <Zoom in={true}>
                <form className='form-container' onSubmit={handleSubmit} style={{}}>
                    <h1 style={{ fontSize: "25px", color: "black" }}>Hey!<br />Money is waiting for you!</h1>
                    <br /> <hr />
                    <label htmlFor="avatar">Avatar:</label>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '10px' }}>
                        <ImageUploader />
                    </div>

                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        placeholder='Enter your First Name'
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="lasttName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        placeholder='Enter your Last Name'
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter your Email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <FormControl>
                        <FormLabel>Password:</FormLabel>
                        <Input
                            // html input attribute
                            name="password"
                            type="password"
                            placeholder="Enter your Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </FormControl>
                
                    <Button 
                        style={{ backgroundColor: "rgb(14, 186, 151)" }} 
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </Zoom>
        </>
    );
}

export default SignUp;
