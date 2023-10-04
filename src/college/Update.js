import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCollege, updateCollege } from '../slices/CollegeCrud';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Update = () => {

    const navigate =  useNavigate()
    const dispatch = useDispatch();
    const queryParams = new URLSearchParams(window.location.search)
    const colleges = queryParams.get("colleges")
    const [data,setData]=useState();
    function UpdateHandel(num1,num2) {
        const College={
            id:colleges,
            name:num1,
            location:num2,
        }
        axios.put('/users/'+colleges,College)
        .then((response) => {
            dispatch(updateCollege(response.data));
            navigate('/home');
            console.log('Helllll',response.data);
        })
        .catch((error) => {
          console.error('Error posting data:', error);
      });
    }

    useEffect(() => {
        axios.get('/users/'+colleges,)
        .then((response) => { 
            setData(response.data);
        })
        .catch((error) => {
          console.error('Error posting data:', error);
      });
      }, []); 
      
  return (
  <div>
    <form >
  <div class="form-group">
    <label for="exampleInputEmail1">College Name</label>
    <input type="text" class="form-control" defaultValue={data?.name} id="name"  />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">location</label>
    <input type="text" class="form-control" id="location" defaultValue={data?.location} />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
  </div>
  <button type="button" class="btn btn-primary" onClick={()=>{UpdateHandel(document.getElementById('name').value,document.getElementById('location').value)}}>Submit</button>
</form>
  </div>
  );
};

export default Update;