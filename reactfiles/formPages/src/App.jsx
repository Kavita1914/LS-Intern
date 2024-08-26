import { useRef, useState } from 'react'
import Step1 from './Step1.jsx'
import Step2 from './Step2.jsx'
import Step3 from './Step3.jsx'
import Step4 from './Step4.jsx'

export default function App() {

  const [ currentStep, setCurrentStep ] = useState(0)
  const [ formFields, setFormFields ] = useState({
    name: '',
    number: '',
    email: '',
    password:''
  })

  const step1ref = useRef(null);
  const step2ref = useRef(null);
  const step3ref = useRef(null);
  const step4ref = useRef(null);

  console.log("formFields >>", formFields );

  const decreaseStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const increaseStepOrSubmit = () => {
   
    if (currentStep === 3) {

      if (step4ref.current.validateForm().isValid) {
        // setCurrentStep((prev) => prev + 1);
        alert("Form Submit Successfully!!!!");
        location.reload();
      } else {
        alert("Please enter a valid Password");
      }

    } else if (currentStep === 0) {
      if (step1ref.current.validateForm().isValid) {
        setCurrentStep((prev) => prev + 1);
      } else {
        alert("Please enter a valid name.");
      }

    } else if (currentStep === 1) {
      if (step2ref.current.validateForm().isValid) {
        setCurrentStep((prev) => prev + 1);
      } else {
        alert("Please enter a valid phone number.");
      }

    } else if (currentStep === 2) {
      if (step3ref.current.validateForm().isValid) {
        setCurrentStep((prev) => prev + 1);
      } else {
        alert("Please enter a valid email.");
      }

    } else {
      setCurrentStep((prev) => prev + 1);
    }
  }

  const getData = (obj) => {
    console.log("obj", obj);
    
      setFormFields(prev => ({
        ...prev,
        ...obj.data
      }))      
    
  }

  // console.log("step1ref >>", step1ref);  

  return (
    <div className="mainDiv">
        <h1>Sign up</h1>
        {/* <p>{formFields.name}</p>
        <p>{formFields.phone}</p>
        <p>{formFields.email}</p> */}
        <div className="inputDiv">
          { currentStep === 0 && (<Step1 ref={step1ref} getData={getData} data={formFields.name}/>)}
          { currentStep === 1 && (<Step2 ref={step2ref} getData={getData} data={formFields.number}/>)}
          { currentStep === 2 && (<Step3 ref={step3ref} getData={getData} data={formFields.email}/>)}
          { currentStep === 3 && (<Step4 ref={step4ref} getData={getData} data={formFields.password}/>)}
          </div>       
        <div className='btnDiv'>
            { currentStep !== 0 && (
              <button className='btnPrevious' onClick={decreaseStep}>Previous</button>
            )}
            <button className='btnNext' onClick={ increaseStepOrSubmit }> { currentStep === 3 ? "Submit" : "Next" } </button>
        </div>
    </div>
  )
}