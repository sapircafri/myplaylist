import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from "./components/Layout/Layout"
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

export const usersContext = createContext()

function App() {
  const [user, setUser] = useState({});
  const [log,setLog] = useState(false)

  return (
    <div className="App">
      <usersContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path='/' element={<LoginPage setLog={setLog} />} />
          <Route path='/RegisterPage' element={<RegisterPage setLog={setLog} />} />

         {log && <>
          <Route path='*' element={<Layout />} />
          </>
         }
        
        </Routes>
      </usersContext.Provider>

    </div>
  );
}
export default App;
