import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteStudents } from '../slices/StudentCrud';

function GetCollegeById() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  function DeleteCollege(id) {  
    console.log(id);
    axios.delete('/users/students/'+id)
      .then((response) => {
        // dispatch(deleteStudents(response.data));
        navigate('/addstudents')
        console.log('Data successfully posted:', response.data);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
    };

    
  const {college} = useSelector((state) => state.AllStudent)
  console.log(college);
  return (
    <div>
      <h2>Student Management</h2>
       <center>
<table class="table table-bordered table-hover">
            <thead className="thead-dark">
            <tr>
            <th  scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
          </thead>
          
      {college? (
        <tbody>
          {college.students.map(item => (
            <><tr>
             <td className="table-success">{item.id}</td>
             <td className="table-success">{item.name}</td>
             <td className="table-success">{item.email}</td>
             {/* <td className="table-success"><button onClick={() => ShowStudents(item.id)}>Update</button></td>
              */}
             <td className="table-success" > <button onClick={() => DeleteCollege(item.id)}>Delete</button></td>
 
            </tr>
            </>
          ))}
          </tbody>
      ): (
        <p>Loading...</p>
      )}
      </table>
      <button type="button"  className="btn btn-success" >add Students</button>
      </center>
    </div>
  );
}

export default GetCollegeById;
