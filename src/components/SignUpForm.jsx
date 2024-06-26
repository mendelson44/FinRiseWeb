import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Zoom from "@mui/material/Zoom";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import ImageUploader from "../components/ImageUploader";

import "@fontsource/inter";

function SignUpForm() {
  const navigate = useNavigate();

  // State to store form data
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    // Here you would usually send the formData to a server or some other handling function
    //TODO: 1. check if this email is not used in the database (GET)
    //      2. if not, create new user (POST)
    navigate('/LoginBusinessDetails'); // Navigate to '/LoginBusinessDetails' after submit
  };

  return (
    <main className="signup-container">
      <CssBaseline />
      <div className="signup-form">
        <Zoom in={true}>
          <Sheet
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: 600,
              py: 3,
              px: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "md",
              marginTop: "50px",
            }}
            variant="outlined"
          >
            <Typography level="h4" component="h1">
              <b>Hey! Money is waiting for you!</b>
            </Typography>
            <Typography level="body-sm">Sign up to get started.</Typography>
            <FormControl
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
                <FormLabel style={{
                    fontWeight: 'bold',
                    display: 'block',
                    margin:'auto',
                    textAlign: 'center',}}
                >Avatar</FormLabel>
              <ImageUploader />
            </FormControl>
            <FormControl>
              <FormLabel style={{ fontWeight: 'bold' }}>First Name</FormLabel>
              <Input
                name="firstName"
                type="text"
                placeholder="Enter your First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel style={{ fontWeight: 'bold' }} >Last Name</FormLabel>
              <Input
                name="lastName"
                type="text"
                placeholder="Enter your Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel style={{ fontWeight: 'bold' }}>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel style={{ fontWeight: 'bold' }}>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button
              sx={{
                mt: 1,
                color: "white",
                backgroundColor: "rgb(14, 186, 151)",
              }}
              type="submit"
            >
              Submit
            </Button>
            <Typography
              endDecorator={<Link href="/login">Log in</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Already have an account?
            </Typography>
          </Sheet>
        </Zoom>
      </div>
    </main>
  );
}

export default SignUpForm;
