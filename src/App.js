import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { getAllCollege } from './slices/CollegeCrud';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCollege from './college/AddCollege';
import AllColleges from './college/AllColleges';
import GetCollegeById from './college/GetCollegeById';
function App() {
  const dispath=useDispatch();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    
  }, []); 
  dispath(getAllCollege(data));


  return (
    <div className="App">
      <BrowserRouter>
        <Routes path="/">
          <Route path='home' index element={<AllColleges/>}/>
          <Route  path='add'  element={<AddCollege/>}/>
          <Route  path=''  element={<AddCollege/>}/>
          <Route path='getCollege/id' element={<GetCollegeById/>}/>
          
        </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
