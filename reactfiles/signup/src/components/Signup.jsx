import { useState } from "react"

export default function Signup() {

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:'',
    checkbox: false
})
const [errors, setErrors] = useState({})
const [isDirty, setIsDirty] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
    checkbox: false
})

const handleChange = async (event) => {
  const { value, type, name, checked} = event?.target
  const updatedFormFields = {...formFields}

  if ( type === 'checkbox') {
    await markAllDirty()
    const isValid = await validateForm(formFields)
    if (isValid) {
      updatedFormFields[name] = checked

    }
  } else {
    updatedFormFields[name] = value
  }
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
              case "firstName":
                      if (updatedFormFields?.firstName) {
                        delete updatedErrors?.firstName
                      }
                      else {
                        updatedErrors.firstName = '*Required'
                        isFormValid= false 
                      }
                      setErrors(updatedErrors)
                      break
              case "lastName":
                        if (updatedFormFields?.lastName) {
                          delete updatedErrors?.lastName
                        }
                        else {
                          updatedErrors.lastName = '*Required'
                          isFormValid= false 
                        }
                        setErrors(updatedErrors)
                        break
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
              case "confirmPassword":
                      if (updatedFormFields?.confirmPassword) {                       
                          if (updatedFormFields.password === updatedFormFields.confirmPassword) {
                              delete updatedErrors?.confirmPassword
                          } else {
                              updatedErrors.confirmPassword = 'Failed to match password!'
                              isFormValid= false
                          }
                      } else {
                          updatedErrors.confirmPassword = '*Required'
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
      await markAllDirty()
      const isValid = await validateForm(formFields)
      console.log("isValid >>", isValid);
    if (isValid) {
      alert("sucessful sign up")
    }
  } catch (error) {
      
  }
}

  return (
    <div className="mainDiv">
      <h1>Sign Up</h1>

      <div className="inputDiv">
        <label>
          <strong>First Name :</strong>{" "}
        </label>
        <input
          name="firstName"
          type="text"
          className="input"
          placeholder="Enter your first name"
          value={formFields?.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </div>

      { isDirty?.firstName ? <p>{errors?.firstName}</p>: null }

      <div className="inputDiv">
        <label>
          <strong>Last Name :</strong>{" "}
        </label>
        <input
          name="lastName"
          type="text"
          className="input"
          placeholder="Enter your last name"
          value={formFields?.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </div>

      { isDirty?.lastName ? <p>{errors?.lastName}</p>: null }

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

      { isDirty?.email ? <p>{errors?.email}</p> : null }

      <div className="inputDiv">
        <label>
          <strong>Password :</strong>
        </label>
        <input
          name="password"
          type="text"
          className="input"
          placeholder="Enter your Password"
          value={formFields?.password}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </div>

      { isDirty?.password ? <p>{errors?.password}</p>: null }

      <div className="inputDiv">
        <label>
          <strong>Confirm Password :</strong>
        </label>
        <input
          name="confirmPassword"
          type="text"
          className="input"
          placeholder="Confirm your Password"
          value={formFields?.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      </div>

      { isDirty?.confirmPassword ? <p>{errors?.confirmPassword}</p>: null }

     <div className="inputDiv">
        <input 
        type="checkbox"
        name="checkbox"
        checked={formFields?.checkbox}
        // value={formFields?.checkbox}
        onChange={handleChange}
        />
        <label> I Agree all the<span> terms and conditions</span></label>
     </div>
     { isDirty?.checkbox ? <p>{errors?.checkbox}</p>: null }
     <button  disabled={!formFields.checkbox} className="btn" onClick={handleSubmit}>Sign up</button>
    </div>
  );
}
