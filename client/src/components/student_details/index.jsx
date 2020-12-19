import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Student = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);

  const [student, setMusic] = useState([]);

  useEffect(() => {
    if (!globalStore.REACT_APP_ENDPOINT) return;
    
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/student`)
    .then(({ data }) => {
      setMusic(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the student: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header StudentName="Student"/>

      <Container>
        {student && student.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <th>Student Name</th>
              <th>Student ID</th>
              <th>Course</th>
            </thead>

            <tbody>
              {student.map((stud, i) => (
                <tr key={i}>
                  <td>
                    {stud.StudentName}
                  </td>
                  
                  <td>
                    {stud.StudentID}
                  </td>

                  <td>
                    {stud.Course}
                  </td>

                  <td>
                    <Link to={`/edit/${stud._id}`}>
                      edit
                    </Link>
                    &nbsp;|&nbsp;
                    <Link to={`/destroy/${stud._id}`}>
                      delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </Container>
    </>
  );
}
 
export default Student;