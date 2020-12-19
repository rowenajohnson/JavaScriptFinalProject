import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../../shared/Notifications';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { GlobalStoreContext } from '../../shared/Globals';

const studentForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const{globalStore} = useContext(GlobalStoreContext);

  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
    event.persist();
    setInputs({ ...inputs, [event.target.name]: event.target.value});
  };

  const handleSubmit = event => {
   event.preventDefault();
   Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`,{...inputs})
   .then(({data}) => {
     if(data){
       setNotification({
         type: "success",
         message: "Successfully Submitted!"
       });
     }
     setRedirect(true);
   })
   .catch(error =>{
     console.error(error.message);
     setNotification({
       type:"danger",
       message: `Unable to perform this function!: ${error.message}`
     });
   });

  };

  if (redirect) return <Redirect to="/"/>;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Student Name</Form.Label>

      <Form.Group>
        <Form.Control 
          onChange={handleChange} 
          name="StudentName" 
          placeholder="XYZ"
          defaultValue={inputs.StudentName}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Student ID</Form.Label>

        <Form.Control 
          onChange={handleChange} 
          name="StudentID" 
          placeholder="StudentID"
          defaultValue={inputs.StudentID}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Course</Form.Label>

        <Form.Control 
          onChange={handleChange} 
          name="Course" 
          placeholder="Courser"
          defaultValue={inputs.Course}
        />
      </Form.Group>

      <Form.Group>
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
}
 
export default StudentForm;