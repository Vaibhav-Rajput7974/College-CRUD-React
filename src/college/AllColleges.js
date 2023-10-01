import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteClg, getClgById } from '../slices/CollegeCrud';
import { getAllStudents } from '../slices/StudentCrud';

function AllColleges() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  
  const {colleges} = useSelector((state) => state.AllCollege)
  function DeleteCollege(id) {  
    axios.delete('/users/'+id)
      .then((response) => {
        dispatch(deleteClg(response.data));
        navigate('/home')

        console.log('Data successfully posted:', response.data);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
    };

    function ShowStudents(id) {  
      axios.get('/users/'+id)
        .then((response) => {
          dispatch(getClgById(response.data.id));
          navigate('/getCollege/id')
          console.log('Data successfully posted:', response.data);
        })
        .catch((error) => {
          console.error('Error posting data:', error);
        });
      };
  
      
  
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
             <td className="table-success"><button onClick={() => ShowStudents(item.id)}>ShowStudents</button></td>
             
            <td className="table-success" > <button onClick={() => DeleteCollege(item.id)}>Delete</button></td>

             <td className="table-success"><button>Update</button></td>
             <td className="table-success"><button>Add Students</button></td>
            </tr>
            </>
          ))}
          </tbody>
      ): (
        <p>Loading...</p>
      )}
      </table>
      <button type="button" onClick={()=>navigate('/add')} className="btn btn-success" >addCollege</button>
      </center>
    </div>
  );
}

export default AllColleges;
