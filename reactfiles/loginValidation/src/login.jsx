import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const Login = () => {
    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const [isDirty, setIsDirty] = useState({
        email: false,
        password: false
    })

    const navigate = useNavigate();  // Initialize the navigate function

    const handleChange = (event) => {
        const { value, name } = event?.target
        const updatedFormFields = {...formFields}
        updatedFormFields[name] = value
        // console.log("updatedFormFields >>", updatedFormFields);
        setFormFields(updatedFormFields)
        validateForm(updatedFormFields)
    }

    const handleBlur = (event) => {
        const { name } = event?.target
        const updatedIsDirty = {...isDirty}
        updatedIsDirty[name] = true
        setIsDirty(updatedIsDirty)
        validateForm(formFields)
    }

    const markAllDirty = () => {
        return new Promise((resolve) => {
            Object.keys(isDirty).forEach((each) => {
                isDirty[each] = true
            })
            setIsDirty(isDirty)
            resolve()
        })
    }

    const validateForm = (updatedFormFields) => {
        const updatedErrors = {...errors}
        let isFormValid = true
        return new Promise((resolve) => {
            Object.keys(updatedFormFields).forEach((each) => {
                switch (each) {
                    case "email":
                            if (updatedFormFields?.email) {
                                if (emailRegex.test(updatedFormFields?.email)) {
                                    delete updatedErrors?.email
                                } else {
                                    updatedErrors.email = 'Invalid email!'
                                    isFormValid= false
                                }
                            } else {
                                updatedErrors.email = '*Required'
                                isFormValid= false                                
                            }
                            setErrors(updatedErrors)
                            break
                        case "password":
                            if (updatedFormFields?.password) {
                                if (passwordRegex.test(updatedFormFields?.password)) {
                                    delete updatedErrors?.password
                                } else {
                                    updatedErrors.password = 'Invalid password!'
                                    isFormValid= false
                                }
                            } else {
                                updatedErrors.password = '*Required'
                                isFormValid= false
                                
                            }
                            setErrors(updatedErrors)
                            break                
                    default:
                        break;
                }
            })
            resolve(isFormValid)
        })
    }

    const handleSubmit = async () => {
        try {
            await markAllDirty();
            const isValid = await validateForm(formFields);
            console.log("isValid >>", isValid);
            
            if (isValid) {
                const users = JSON.parse(localStorage.getItem('users')) || [];
                
                // Check if there is a matching user
                const userIndex = users.findIndex((user) => 
                    user.email === formFields.email && user.password === formFields.password
                );
                
                if (userIndex !== -1) {
                    // Update the isLoggedIn flag to true for the found user
                    users[userIndex].isLoggedIn = true;
                    
                    // Save the updated users list back to local storage
                    localStorage.setItem('users', JSON.stringify(users));
                    
                    // Redirect to homepage
                    navigate('/');  
                } else {
                    alert("User doesn't exist");
                }
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }    

    // console.log("isDirty >>", isDirty);
    console.log("errors >>", errors);

    return (
        <div className="mainDiv">
      <h1>Log In</h1>

      <div className="inputDiv">
        <label>
          <strong>Email ID :</strong>{" "}
        </label>
        <input
        name="email"
        type="email"
          className="input"
          placeholder="Enter your Email ID"
          value={formFields?.email}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </div>

      {isDirty?.email ?
      <p>{errors?.email}</p> : null}

      <div className="inputDiv" >
        <label>
          <strong>Password :</strong>
        </label>
        <input
        name="password"
        type="password"
          className="input"
          placeholder="Enter your Password"
          value={formFields?.password}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </div>

{isDirty?.password ?
      <p>{errors?.password}</p>: null}

      <div>
      <button className="btn" onClick={handleSubmit}>Log in</button>
      </div>
        <div>
        <Link to="/signup">
        <button className="btn3">Don't have an account ?<span>  Sign Up</span></button>
        </Link>      
        </div>
    </div>
    )
}

export default Login;