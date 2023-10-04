import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteClg, getAllCollege} from '../slices/CollegeCrud';
import { getStudents } from '../slices/StudentCrud';

function AllColleges() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
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
  
  const {colleges} = useSelector((state) => state.AllCollege)
  
  function DeleteCollege(id) {  
    axios.delete('/users/'+id)
      .then((response) => {
        dispatch(deleteClg(response.data));
        console.log('Data successfully posted:', response.data);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
    };

    function ShowStudents(id) {  
      navigate(`/getCollege/id?id=${id}`);
      
    };
    
    function UpdateHandel(num1,num2){
      console.log(num1);
      console.log(num2);
      //navigate(`/update?name=${num1}&location=${num2}`)
    }
      
  
  return (
    <div>
      <h2>College Management</h2>
       <center>
<table class="table table-bordered table-hover">
            <thead className="thead-dark">
            <tr>
            <th  scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">location</th>
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
             <td className="table-success"  id="name" >{item.id}</td>
             <td className="table-success" >{item.name}</td>
             <td className="table-success" id="location" >{item.location}</td>
             <td className="table-success"><button className="btn btn-info" onClick={() => ShowStudents(item.id)}>ShowStudents</button></td>
             
            <td className="table-success" > <button  className="btn btn-danger" onClick={() => DeleteCollege(item.id)}>Delete</button></td>

             <td className="table-success"><button className="btn btn-warning" onClick={()=>navigate(`/update?colleges=${item.id}`)}>Update</button></td>
       
             <td className="table-success"><button className="btn btn-success" onClick={()=>navigate(`/addstudents?colleges=${item.id}`)}>Add Students</button></td>
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
