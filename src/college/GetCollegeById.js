import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteStudents } from '../slices/StudentCrud';
import { deleteStudentClg, getAllCollege } from '../slices/CollegeCrud';

function GetCollegeById() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {colleges} = useSelector((state) => state.AllCollege);
  const queryParams = new URLSearchParams(window.location.search)
  const id = queryParams.get("id")
  
  const students = colleges?.find(college => college?.id == id)?.students;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users/');
        dispatch(getAllCollege(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 

  function DeleteStudents(DeleteId) {  
    console.log(DeleteId);
    axios.delete('/users/students/'+DeleteId)
      .then((response) => {
        dispatch(deleteStudentClg(
          {
            id: id,
            response:response.data
          }
        ));
        console.log('Data successfully posted:', response.data);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
    };
    
    
    
  // console.log('sssssss',students);
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
          
      {students? (
        <tbody>
          {students?.map(item => (
            <><tr>
             <td className="table-success">{item.id}</td>
             <td className="table-success">{item.name}</td>
             <td className="table-success">{item.email}</td>
             <td className="table-success" > <button class="btn btn-danger" onClick={() => DeleteStudents(item.id)}>Delete</button></td>
             <td className="table-success"><button class="btn btn-warning" onClick={()=>navigate(`/updatestu?students=${item.id}&id=${id}`)}>Update</button></td>
            </tr>
            </>
          ))}
          </tbody>
      ): (
        <p>Loading...</p>
      )}
      </table>
      <button className="btn btn-success" onClick={()=>navigate(`/addstudents?colleges=${id}`)}>Add Students</button><br/>
      <button className="btn btn-success" onClick={()=>navigate(`/home`)}>Home</button>
      
      </center>
    </div>
 );
}

export default GetCollegeById;
