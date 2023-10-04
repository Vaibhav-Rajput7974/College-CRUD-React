import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCollege, updateCollege, updateStudentClg } from '../slices/CollegeCrud';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Updatestu = () => {
    const navigate =  useNavigate();
    const dispatch = useDispatch();
    const queryParams = new URLSearchParams(window.location.search)
    const st = queryParams.get("students")
    const college=queryParams.get("id")
    const [data,setData]=useState();
    function UpdateHandel(num1,num2) {
        const Student={
            name:num1,
            email:num2,
        }
        axios.put('/users/students/'+st,Student)
        .then((response) => {
            dispatch(updateStudentClg(
                {
                    id:college,
                    response:response.data
                }));
            navigate(`/getCollege/id?id=${college}`);
            // console.log('Helllll',response.data);
        })
        .catch((error) => {
          console.error('Error posting data:', error);
      });
    }

    useEffect(() => {
        axios.get('/users/students/'+st,)
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
    <label for="exampleInputEmail1"> Name</label>
    <input type="text" class="form-control" id="name" defaultValue={data?.name}  />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="text" class="form-control" id="email" defaultValue={data?.email}  />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
  </div>
  <button type="button" class="btn btn-primary" onClick={()=>{UpdateHandel(document.getElementById('name').value,document.getElementById('email').value)}}>Submit</button>
</form>
  </div>
  );
};

export default Updatestu;