import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from "./components/Layout/Layout"
import LoginPage from './pages/LoginPage/LoginPage';
import users from "./Usersfct";

const usersContext = createContext()

function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <usersContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='*' element={<Layout />} />
        </Routes>
      </usersContext.Provider>

    </div>
  );
}
export default App;
