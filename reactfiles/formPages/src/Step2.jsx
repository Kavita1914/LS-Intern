import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const Step2 = forwardRef((props, ref) => {
  const { getData, data } = props;

  const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setNumber(data); // Update number when data changes
  }, [data]);

  const handleChange = (event) => {
    const value = event.target.value;
    setNumber(value);
    const validation = validateForm(value);
    getData({
      isValid: validation.isValid,
      data: { number: value },
    });
  };

  const handleBlur = (event) => {
    const value = event.target.value;
    validateForm(value);
  };

  const validateForm = (value) => {
    let valid = false;
    if (value) {
      if (phoneRegex.test(value)) {
        setError("");
        valid = true;
      } else {
        setError("*Invalid Number");
        valid = false;
      }
    } else {
      setError("*Required");
      valid = false;
    }
    setIsValid(valid);
    return {
      isValid: valid,
      phone: value,
    };
  };

  useImperativeHandle(ref, () => ({
    validateForm: () => validateForm(number), // Call validateForm with the current number state
  }));

  return (
    <div>
      <input
        className="input"
        type="tel"
        value={number}
        placeholder="Enter Your Phone no."
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p>{error}</p>
    </div>
  );
});

export default Step2;
