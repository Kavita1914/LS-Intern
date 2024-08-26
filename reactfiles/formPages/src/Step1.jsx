import { forwardRef, useEffect, useImperativeHandle, useState } from "react"

const Step1 = forwardRef((props, ref) => {

    const {getData, data} = props;

    const [ name , setName ] = useState('')
    const [ error , setError ] = useState('')
    const [ isValid, setIsValid ] = useState(false)

    // console.log("name >>", name)

    useEffect(() => {
        setName(data)
    },[data])


    const handleChange = (event) => {
        const value = event.target.value
        setName(value)
        const validation = validateForm(value)
        getData({
            isValid: validation.isValid,
            data: {name: value}
        })
    }

    const handleBlur = (event) => {
        const value = event.target.value
        validateForm(value)
    }
    
    const validateForm = (value) => {
        if(value === '') {
            setError('*Required')
            setIsValid(false)
        } else {
            setError('')
            setIsValid(true)
        }
        console.log("name >>", name);       

        return {
            isValid: isValid,
            name: value
        }
        
    }

    useImperativeHandle(ref, () => ({
        validateForm
    }));

    // console.log("isValid >>", isValid)
    console.log("name >>", name);


    return (
        <div>
            <input className="input" type="text" value={name} placeholder="Enter Your Name" onChange={handleChange} onBlur={handleBlur}></input>
            <p>{error}</p>
        </div>
    )
})

export default Step1;