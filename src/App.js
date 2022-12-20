import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes, Navigate , useNavigate } from 'react-router-dom';
import './App.css';
import Layout from "./components/Layout/Layout"
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

export const usersContext = createContext()

function App() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  // const [log,setLog] = useState(false)

//use effect check token in local and get user
useEffect(() => {   
const haveToken = JSON.parse(localStorage.getItem("token")) 
if(haveToken){
  console.log(haveToken);
  
  axios.get('/checkToken',	{
    headers: {
      'Authorization': haveToken, 
    }
  })
  .then(function (response) {
    // handle success
    setUser(response.data)
    navigate('/spotify')

    console.log(response.data);

    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}
},[]);

  return (
    <div className="App">
      <usersContext.Provider value={{user, setUser}}>
       
       
        <Routes>

        {!user && <>
          <Route path='/' element={<LoginPage  />} />
          <Route path='/RegisterPage' element={<RegisterPage />} />
          <Route path='*' element={<Navigate to="/" />} />
          </>
         }
       
          <Route path='*' element={<Layout />} />
         
        
        </Routes>
      </usersContext.Provider>

    </div>
  );
}
export default App;


