import { useState } from "react";

export default function Form() {
    
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const [formFields, setFormFields] = useState([{
        firstName: '',
        lastName: '',
        email: ''
    }]);
    const [errors, setErrors] = useState([{
        firstName: '',
        lastName: '',
        email: ''
    }]);
    const [isDirty, setIsDirty] = useState([{
        firstName: false,
        lastName: false,
        email: false
    }]);

    const handleChange = (index, event) => {
        const { value, name } = event.target;
        const updatedFormFields = formFields.map((field, i) =>
            i === index ? { ...field, [name]: value.trim() } : field
        );
        setFormFields(updatedFormFields);
        validateForm(updatedFormFields);
    };

    const markAllDirty = () => {
        return new Promise((resolve) => {
            const updatedIsDirty = isDirty.map((dirty) => ({
                firstName: true,
                lastName: true,
                email: true
            }));
            setIsDirty(updatedIsDirty);
            resolve();
        });
    };

    const handleBlur = (index, event) => {
        const { name } = event.target;
        const updatedIsDirty = [...isDirty];
        updatedIsDirty[index] = {...updatedIsDirty[index], [name]: true};
        setIsDirty(updatedIsDirty);
        validateForm(formFields);
    };

    const check = (formFields, newEmail) => {
        return formFields.some((field) => field.email === newEmail);
    }

    const handleAdd = async () => {
        try {
            // Use a temporary email for the new row
            const newEmail = formFields[formFields.length - 1]?.email || '';
    
            // Check for duplicate emails in the formFields excluding the new one
            const isEmailDuplicate = check(formFields.slice(0, formFields.length - 1), newEmail);
            if (isEmailDuplicate) {
                return
            }    
            await markAllDirty();
            const isValid = await validateForm(formFields);
            if (isValid) {
                setFormFields([...formFields, { firstName: '', lastName: '', email: '' }]);
                setErrors([...errors, { firstName: '', lastName: '', email: '' }]);
                setIsDirty([...isDirty, { firstName: false, lastName: false, email: false }]);
            }
        } catch (error) {

        }
    };
    
    
    const handleDelete = (indexToDelete) => {
        const updatedFormFields = formFields.filter((_, index) => index !== indexToDelete);
        const updatedErrors = errors.filter((_, index) => index !== indexToDelete);
        const updatedIsDirty = isDirty.filter((_, index) => index !== indexToDelete);
        setFormFields(updatedFormFields);
        setErrors(updatedErrors);
        setIsDirty(updatedIsDirty);
    };

    const validateForm = (updatedFormFields) => {
        return new Promise((resolve) => {
            const updatedErrors = updatedFormFields.map(field => ({
                firstName: '',
                lastName: '',
                email: ''
            }));
            let isFormValid = true;

            updatedFormFields.forEach((field, rowIndex) => {
                if (!field.firstName) {
                    updatedErrors[rowIndex].firstName = "*Required";
                    isFormValid = false;
                }
            
                if (!field.lastName) {
                    updatedErrors[rowIndex].lastName = "*Required";
                    isFormValid = false;
                }
            
                if (!field.email) {
                    updatedErrors[rowIndex].email = "*Required";
                    isFormValid = false;
                } else if (!emailRegex.test(field.email)) {
                    updatedErrors[rowIndex].email = "Invalid email!";
                    isFormValid = false;
                } else if (check(updatedFormFields.slice(0, rowIndex), field.email)) {
                    updatedErrors[rowIndex].email = "Email already exists!";
                    isFormValid = false;
                }
            });

            setErrors(updatedErrors);
            resolve(isFormValid);
        });
    };

    // console.log("formFields >>", formFields);
    // console.log("errors >>", errors);
    // console.log("isDirty >>", isDirty);    

    return (
        <div className="mainDiv">
            <table>
                <tbody>
                    {formFields.map((fields, index) => (
                        <tr key={index}>
                            <th>
                                <input
                                    name="firstName"
                                    type="text"
                                    value={fields.firstName}
                                    placeholder="First Name"
                                    onChange={(e) => handleChange(index, e)}
                                    onBlur={(e) => handleBlur(index, e)}
                                    // readOnly={index !== formFields.length - 1}
                                />
                                {isDirty[index]?.firstName && <span>{errors[index]?.firstName}</span>}
                            </th>
                            <th>
                                <input
                                    name="lastName"
                                    type="text"
                                    value={fields.lastName}
                                    placeholder="Last Name"
                                    onChange={(e) => handleChange(index, e)}
                                    onBlur={(e) => handleBlur(index, e)}
                                    // readOnly={index !== formFields.length - 1}
                                />
                                {isDirty[index]?.lastName && <span>{errors[index]?.lastName}</span>}
                            </th>
                            <th>
                                <input
                                    name="email"
                                    type="email"
                                    value={fields.email}
                                    placeholder="Email ID"
                                    onChange={(e) => handleChange(index, e)}
                                    onBlur={(e) => handleBlur(index, e)}
                                    // readOnly={index !== formFields.length - 1}
                                />
                                {isDirty[index]?.email && <span>{errors[index]?.email}</span>}
                            </th>
                            <th>
                                {formFields.length > 1 && (
                                    <button className="closeBtn" onClick={() => handleDelete(index)}>
                                        <strong>X</strong>
                                    </button>
                                )}
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
                <img className="plusBtn" onClick={handleAdd} src="../../plus.png" height={40} width={40} alt="Add" />
        </div>
    );
}


