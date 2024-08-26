import { forwardRef, useEffect, useImperativeHandle, useState } from "react"

const Step3 = forwardRef((props, ref) => {

  const {getData, data} = props;
    
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setEmail(data)
  },[data])

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const validation = validateForm(value)
        getData({
            isValid: validation.isValid,
            data: {email: value}
        })
  };

  const handleBlur = (event) => {
    const value = event.target.value;
    validateForm(value);
  };

  const validateForm = (value) => {
    if (value) {
      if (emailRegex.test(email)) {
        setError("");
        setIsValid(true);
      } else {
        setError("*Invalid email");
        setIsValid(false);
      }
    } else {
      setError("*Required");
      setIsValid(false);
    }
    return {
        isValid,
        email
    }
  };

  useImperativeHandle(ref, () => ({
    validateForm
}));

  console.log("isValid >>", isValid);

  return (
    <div>
      <input
        className="input"
        type="email"
        placeholder="Enter Your Email ID"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
      <p>{error}</p>
    </div>
  );
})

export default Step3;
