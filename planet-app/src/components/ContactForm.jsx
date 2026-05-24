import React, { useState } from "react";
import '../index.css'
function ContactForm() {
  const [formData, setFormData] =  useState(() => {
    // Get saved data from localStorage
    const savedData = localStorage.getItem("contactForm");

    return savedData
      ? JSON.parse(savedData)
      : {
          fullName: "",
          email: "",
          city: "",
          phone: "",
          message: "",
          contactMethod: "",
          heardFrom: []       
        };
  });

  
  localStorage.setItem("contactForm", JSON.stringify(formData));



  const cities = ["New York", "London", "Paris", "Tokyo"]; // Example cities

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const newArray = checked
          ? [...prev.heardFrom, value]
          : prev.heardFrom.filter((item) => item !== value);
        return { ...prev, heardFrom: newArray };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };



const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting form:", formData); // Debugging log

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      city: "",
      phone: "",
      message: "",
      contactMethod: "",
      heardFrom: [],
    });


  
  // Convert formData to URL-encoded string
  const formBody = new URLSearchParams();
  formBody.append("fullName", formData.fullName);
  formBody.append("email", formData.email);
  formBody.append("city", formData.city);
  formBody.append("phone", formData.phone);
  formBody.append("message", formData.message);
  formBody.append("contactMethod", formData.contactMethod);
  formBody.append("heardFrom", formData.heardFrom.join(", ")); // convert array to comma-separated string

  try {
    const response = await fetch("https://whitebricks.com/tsacademy.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody.toString(),
    });

    const text = await response.text(); // use text instead of JSON in case PHP doesn't return JSON
    console.log("Server response:", text);

    alert("Form submitted successfully!");


    // Clear localStorage
    localStorage.removeItem("contactForm");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <div style={Styles.section}>
      <div className="topic">
      <h1 style={Styles.title}>Have Questions About Planetary Science?</h1>
      <p style={Styles.text}>
        Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?
        Reach out and we'll get back to you.
      </p>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="grid" style={Styles.grid}>
            <div>
              <label style={Styles.label}>Full Name<span style={Styles.span}>*</span></label>
            <input
              style={Styles.input}
              type="text"
              name="fullName"
              placeholder="full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            </div>


          
            <div>
              <label style={Styles.label}>Email<span style={Styles.span}>*</span></label>
            <input
            style={Styles.input}
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            </div>
          

        
            <div>
              <label style={Styles.label}>City<span style={Styles.span}>*</span></label>
            <select style={Styles.input} name="city" value={formData.city} onChange={handleChange} required>
              <option value="">Choose city</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            </div>
  

          
            <div>
              <label style={Styles.label}>Phone Number<span style={Styles.span}>*</span></label>
            <input
            style={Styles.input}
              type="tel"
              name="phone"
              placeholder="Please enter a valid phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            </div>
          

          <div>
            <label style={Styles.label}>Message<span style={Styles.span}>*</span></label>
          <textarea
          style={Styles.textarea}
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <p style={Styles.capture}>100 characters</p>
          </div>
        
        
          <div style={Styles.pad} className="display">
              <label style={Styles.labels}>How should we contact you?</label>
            <div style={Styles.radio}>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="Phone"
                checked={formData.contactMethod === "Phone"}
                onChange={handleChange}
              /> Phone
            </label>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="Email"
                checked={formData.contactMethod === "Email"}
                onChange={handleChange}
              /> Email
            </label>
            
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="Both"
                checked={formData.contactMethod === "Both"}
                onChange={handleChange}
              /> Both
            </label>
            </div>
          
              <label style={Styles.padding}>How did you hear about us?</label>
            <div style={Styles.radio}>
            <label>
              <input
                type="checkbox"
                name="heardFrom"
                value="Friend"
                checked={formData.heardFrom.includes("Friend")}
                onChange={handleChange}
              /> Friend
            </label>
            <label>
              <input
                type="checkbox"
                name="heardFrom"
                value="TS academy"
                checked={formData.heardFrom.includes("TS academy")}
                onChange={handleChange}
              /> TS academy
            </label>
            <label>
              <input
              
                type="checkbox"
                name="heardFrom"
                value="Other"
                checked={formData.heardFrom.includes("Other")}
                onChange={handleChange}
              /> Other
            </label>
              
              </div>
          </div>          

          </div>
        <button type="submit" className="submit-btn" style={Styles.Button}>Submit &gt;</button>
      </form>

    </div>
  );
}

const Styles = {

    section: {
    padding: "70px 60px",
    background: "#f0f4ff",
    },
    title: {
    fontSize: 26,
    fontWeight: 700,
    color: "#0d47a1",
    margin: "10px 0px",
    },
    text: {
      letterSpacing: 0.5,
      lineHeight: 1.5,
      color: "black",
      margin: "0 0 30px 0",
    },

    label: {
      padding: "0",
      fontSize: "15px",
      fontWeight: 700,
      display: "block",
      padding:"0 0 7px 0"
    },
    span: {
      color: "red"
    },
    input: {
      border: "1px solid #cdd5e0",
      borderRadius: 6,
      padding: "10px 12px",
      fontSize: 13,
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      color: "#333",
    },
    textarea: {
      border: "1px solid #cdd5e0",
      borderRadius: 6,
      padding: "10px 12px",
      fontSize: 13,
      outline: "none",
      width: "100%",
      height: "80%",
      boxSizing: "border-box",
      color: "#333",
    },
    
  labels: {
      fontSize: "15px",
      fontWeight: 700,
      display: "block",
      lineHeight: "30px"
    },
    radio: {
      display: "flex",
      padding: "0px 0px 0px 0px",
      justifyContent: "space-between",
      alignContent: "center",
      width: "400px"
    },
    pad: {
      paddingTop: "10px",
    },
    padding: {
      paddingTop: "40px",
      fontSize: "15px",
      fontWeight: 700,
      display: "block",
      lineHeight: "30px",
    },
    
    capture: {
      color: "gray",
      fontSize: "10px"
    },

    Button: {
      margin: "60px 0",
      backgroundColor: "#0d49a1",
      color: "white",
      fontSize: "16px",
      padding: "5px 70px",
      borderRadius: "6px",
      cursor: "pointer"
    }
    

}
export default ContactForm;
