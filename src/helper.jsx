import React, { useState } from "react";

function InputValidationExample() {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
  });

  const [errors, setErrors] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
  });

  const validateForm = () => {
    let newErrors = { ...errors };

    // Perform validation based on input type
    // Text validation
    if (formData.input1.trim() === "") {
      newErrors.input1 = "Input 1 is required.";
    } else {
      newErrors.input1 = "";
    }

    // Number validation
    if (formData.input2.trim() === "") {
      newErrors.input2 = "Input 2 is required.";
    } else if (isNaN(Number(formData.input2))) {
      newErrors.input2 = "Input 2 must be a number.";
    } else {
      newErrors.input2 = "";
    }

    // Email validation
    if (formData.input3.trim() === "") {
      newErrors.input3 = "Input 3 is required.";
    } else if (!isValidEmail(formData.input3)) {
      newErrors.input3 = "Input 3 must be a valid email address.";
    } else {
      newErrors.input3 = "";
    }

    // Update the errors state
    setErrors(newErrors);
  };

  const isValidEmail = (email) => {
    // Email validation logic (you can use a regular expression or any other validation method)
    // For simplicity, this example just checks if the email contains an '@' symbol
    return email.includes("@");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="input1"
        value={formData.input1}
        onChange={handleChange}
        className={`input ${errors.input1 ? "border-red-500" : ""}`}
      />
      {errors.input1 && <p className="text-red-500">{errors.input1}</p>}

      <input
        type="text"
        name="input2"
        value={formData.input2}
        onChange={handleChange}
        className={`input ${errors.input2 ? "border-red-500" : ""}`}
      />
      {errors.input2 && <p className="text-red-500">{errors.input2}</p>}

      <input
        type="email"
        name="input3"
        value={formData.input3}
        onChange={handleChange}
        className={`input ${errors.input3 ? "border-red-500" : ""}`}
      />
      {errors.input3 && <p className="text-red-500">{errors.input3}</p>}

      {/* Repeat the above pattern for the remaining inputs */}

      <button onClick={validateForm}>Validate</button>
    </div>
  );
}

export default InputValidationExample;
