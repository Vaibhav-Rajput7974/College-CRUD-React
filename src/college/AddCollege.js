import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCollege } from '../slices/CollegeCrud';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const AddCollege = () => {

    const navigate =  useNavigate()
    const dispatch = useDispatch();
    
    function handelAdd(num1,num2) {
        const College={
            name:num1,
            location:num2,
            students:[],
        }
        postRequest(College);
    }

    function postRequest(College){
        axios.post('/users/', College)
      .then((response) => {

        dispatch(addCollege(response.data));
        navigate('/home')

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
    <label for="exampleInputEmail1">College Name</label>
    <input type="text" class="form-control" id="name" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">location</label>
    <input type="text" class="form-control" id="location" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
  </div>
  <button type="button" class="btn btn-primary" onClick={()=>{handelAdd(document.getElementById('name').value,document.getElementById('location').value)}}>Submit</button>
</form>
  </div>
  );
};

export default AddCollege;