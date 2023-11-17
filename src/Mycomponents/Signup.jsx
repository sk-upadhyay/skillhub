import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const validateEmail = (email) => {
    const regex = /.*@kiit.ac.in$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };
  const validateFirstName = (firstName) => {
    return firstName.length >= 2;
  };
  const validateLastName =(lastName)=>{
    return lastName.length >= 2;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const { email, firstName, lastName, password } = formData;
  
    if (!validateEmail(email)) {
      alert("Email must end with @kiit.ac.in");
      return;
    }

    if (!validateFirstName(firstName)) {
      alert("Please enter a valid First name");
      return;
    }
    if (!validateLastName(lastName)) {
      alert("Please enter a valid Last name");
      return;
    }

    if (!validatePassword(password)) {
      alert("Password must be more than 8 characters long");
      return;
    }
  
    const formValues = formData;
    const jsonData = JSON.stringify(formValues);
    console.log(jsonData);
    alert("Form submitted successfully");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="forms">
        <ul>
          <b>Sign Up Form</b>
          <li>
            <label htmlFor="email">Email of:</label>
            <input
              id="email"
              type="email"
              placeholder="Email Here"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </li>

          <li>
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </li>
          <li>
            <input type="submit" value="Submit" />
          </li>
        </ul>
      </div>
    </form>
  );
};

export default Signup;
