import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { getAllCollege } from './slices/CollegeCrud';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCollege from './college/AddCollege';
import AllColleges from './college/AllColleges';
import GetCollegeById from './college/GetCollegeById';
import AddStudents from './college/AddStudents';
import Update from './college/Update';
function App() {
  const dispath=useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users/');
        dispath(getAllCollege(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

  }, []); 
  
  


  return (
    <div className="App">
      <BrowserRouter>
        <Routes path="/">
          <Route   path='home'  element={<AllColleges/>}/>
          <Route  path='add'  element={<AddCollege/>}/>
          <Route  path=''  element={<AddCollege/>}/>
          <Route path='getCollege/id' element={<GetCollegeById/>}/>
          <Route path='addstudents' element={<AddStudents/>}/>
          <Route path='update' element={<Update/>}/>
          
          
        </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
