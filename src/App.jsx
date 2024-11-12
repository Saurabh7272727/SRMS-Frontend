import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Admin from './Admin/Admin';
import 'react-toastify/dist/ReactToastify.css';
import User from './Admin/User/User.jsx';
import FileUpload from './Utils/FileDesign/FileUplaod.jsx';
import SyncAdmin from './Admin/SyncAdmin/SyncAdmin.jsx';
import Login from './Admin/Login/Login.jsx';
import Service from './Components/Services/Service.jsx';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/admin' element={<Admin />} />
          <Route path='/admin/user/:email/:key/SRMS' element={<User />} />
          <Route path='/img/uploader/:id' element={<FileUpload />} />
          {/* <Route path='/admin/:id' element={<SyncAdmin />} /> */}
          <Route path='/admin/:id/:router' element={<SyncAdmin />} />
          {/* admin login element */}
          <Route path='/admin/login' element={<Login />} />
          <Route path='/service' element={<Service />} />
          <Route path='/service/:num' element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App;