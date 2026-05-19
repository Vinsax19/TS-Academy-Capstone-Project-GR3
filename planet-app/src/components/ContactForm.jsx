import React, { useState } from "react";

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
  
  setFormData({
    fullName: "",
    email: "",
    city: "",
    phone: "",
    message: "",
    contactMethod: "",
    heardFrom: []
  })

  try {
    const response = await fetch("https://whitebricks.com/tsacademy.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(data);

    alert("Form submitted successfully!");

      
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};




  return (
    <div className="form-container">
      <h1>Have Questions About Planetary Science?</h1>
      <p className="form-description">
        Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?
        Reach out and we'll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="planetary-form">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City*</label>
            <select name="city" value={formData.city} onChange={handleChange} required>
              <option value="">Choose city</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Phone Number*</label>
            <input
              type="tel"
              name="phone"
              placeholder="Please enter a valid phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Message*</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group radio-group">
          <label>How should we contact you?</label>
          <div>
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
        </div>

        <div className="form-group checkbox-group">
          <label>How did you hear about us?</label>
          <div>
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

        <button type="submit" className="submit-btn">Submit &gt;</button>
      </form>
    </div>
  );
}

export default ContactForm;