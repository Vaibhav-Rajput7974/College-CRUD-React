import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import { addStudents } from '../slices/StudentCrud';
import { addClgInStudents } from '../slices/CollegeCrud';

const AddStudents = (props) => {
  // const { colleges } = useParams();
  // console.log(colleges);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const queryParams = new URLSearchParams(window.location.search)
  const colleges = queryParams.get("colleges")
  
  
    function handelAdd(num1, num2) {
        const students={
            name: num1,
            email: num2
        }
        console.log(students);
        postStudents(students);
    }
    function postStudents(students){
        axios.post('/users/'+colleges+'/students', students)
      .then((response) => {
          dispatch(addClgInStudents({response:response.data,
            id:colleges}));
          navigate(`/getCollege/id?id=${colleges}`)

        console.log('Data successfully posted:', response.data);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
    }
  return (
  <div>
    <form >
  <div class="form-group">
    <label for="exampleInputEmail1"> Name</label>
    <input type="text" class="form-control" id="name" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="text" class="form-control" id="email" />
  </div>
  <button type="button" class="btn btn-primary" onClick={()=>{handelAdd(document.getElementById('name').value,document.getElementById('email').value)}}>Submit</button>
</form>

  </div>
  );
};

export default AddStudents;