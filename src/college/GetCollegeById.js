import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function GetCollegeById() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const {colleges} = useSelector((state) => state.AllCollege)
      
  console.log(colleges);
  return (
    <div>
      <h2>College Management</h2>
       <center>
<table class="table table-bordered table-hover">
            <thead className="thead-dark">
            <tr>
            <th  scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Students</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
            <th scope="col">Add Students</th>
          </tr>
          </thead>
          
      {colleges ? (
        <tbody>
          {colleges.map(item => (
            <><tr>
             <td className="table-success">{item.id}</td>
             <td className="table-success">{item.name}</td>
             <td className="table-success">{item.location}</td>
             <td className="table-success"><button>Add Students</button></td>
            </tr>
            </>
          ))}
          </tbody>
      ): (
        <p>Loading...</p>
      )}
      </table>
      {/* <button type="button" onClick={()=>navigate('/add')} className="btn btn-success" >addCollege</button> */}
      </center>
    </div>
  );
}

export default GetCollegeById;
