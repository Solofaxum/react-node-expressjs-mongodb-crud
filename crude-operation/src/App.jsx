import { } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Users from './components/Users';

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}> </Route>
        <Route path='/create' element={<CreateUser />} > </Route>
        <Route path='/update' element={<UpdateUser />} > </Route>
      </Routes>
      </BrowserRouter>
    </>
   
  )
}

export default App
