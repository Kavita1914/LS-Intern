import { forwardRef, useImperativeHandle, useState } from "react"

const Step4 = forwardRef((props, ref) => {

    const {getData} = props;

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isValid, setIsValid] = useState(false);
  
    const handleChange = (event) => {
      const value = event.target.value;
      setPassword(value);
      const validation = validateForm(value)
        getData({
            isValid: validation.isValid,
            data: {password: value}
        })
    };
  
    const handleBlur = (event) => {
      const value = event.target.value;
      validateForm(value);
    };
  
    const validateForm = (value) => {
      if (value) {
        if (passwordRegex.test(password)) {
          setError("");
          setIsValid(true);
        } else {
          setError("*Invalid password");
          setIsValid(false);
        }
      } else {
        setError("*Required");
        setIsValid(false);
      }
      return {
        isValid,
        password
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
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
       <p>{error}</p>
    </div>
  );
})

export default Step4;