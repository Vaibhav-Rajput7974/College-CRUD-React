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
import Updatestu from './college/Updatestu';
import NavBar from './college/NavBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes path="/">
          <Route index element={<AllColleges />} />
          <Route exact  path='home'  element={<AllColleges/>}/>
          <Route  path='add'  element={<AddCollege/>}/>
          <Route path='getCollege/id' element={<GetCollegeById/>}/>
          <Route path='addstudents' element={<AddStudents/>}/>
          <Route path='update' element={<Update/>}/>
          <Route path='updatestu' element={<Updatestu/>}/>
          
          
        </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
