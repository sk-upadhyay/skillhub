import React, { useState } from "react";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    const regex = /.*@kiit.ac.in$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };



  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const { email, password } = formData;
  
    if (!validateEmail(email)) {
      alert("Email must end with @kiit.ac.in");
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
          <b>Log in Form</b>
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
}

export default Signin
