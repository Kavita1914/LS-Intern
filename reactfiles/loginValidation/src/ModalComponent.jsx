import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner, Alert } from 'reactstrap';

function ModalComponent(props) {
  const { first, last, phone, setUpdatedProfile } = props;
  
  // Initialize state with props values
  const [editedFirstName, setEditedFirstName] = useState(first);
  const [editedLastName, setEditedLastName] = useState(last);
  const [editedPhone, setEditedPhone] = useState(phone);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');

  const toggle = () => setModal(!modal);

  // Handlers to update state
  const handleFirstNameChange = (e) => setEditedFirstName(e.target.value);
  const handleLastNameChange = (e) => setEditedLastName(e.target.value);
  const handlePhoneChange = (e) => setEditedPhone(e.target.value);

  const handleSave = async () => {
    setError(''); // Clear any previous errors

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find((user) => user.isLoggedIn === true);

    const requestData = {
        profilePicUrl: 'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: {
            first: editedFirstName,
            last: editedLastName
        },
        id: '664d7e06218dc70436872767',
        email: 'abhishek.sharma+jamesquin@logic-square.com', 
        role: 'manager', 
        phone: editedPhone
    };

    try {
        const response = await fetch('https://api-dev.smoothire.com/api/v1/me', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.token}`
            },
            body: JSON.stringify(requestData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json()
        setUpdatedProfile((count) => count + 1)
        // console.log(data);
        toggle();

    } catch (error) {
        setError(error.message);
    } 
  };

  return (
    <div>
      <Button className='btn4' onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h1>Edit Details</h1>
        </ModalHeader>
        <ModalBody>          
          <div>
            <label><strong> First Name : </strong></label>
            <input className='modalInput' type="text" value={editedFirstName} onChange={handleFirstNameChange} />
          </div>
            <div>
            <label><strong> Last Name : </strong></label>
            <input className='modalInput' type="text" value={editedLastName} onChange={handleLastNameChange} />
          </div>
          <div>
            <label><strong> Phone No. : </strong></label>
            <input className='modalInput' type="text" value={editedPhone} onChange={handlePhoneChange} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className='btnEdit' onClick={handleSave}>
            Save
          </Button>
          <Button className='btnCancel' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;
