import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./pages/Home.jsx"
import IpcBook from "./pages/Options/IpcBook"
import CrPCBook from "./pages/Options/CrPCBook.jsx"
import NewCase from './pages/Registration/NewCase.jsx'
import SignUp from "./pages/loginSignup/SignUp.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path="/ipcBook" element={<IpcBook />} />
      <Route path="/CrPCBook" element={<CrPCBook />} />
      <Route path="/login" element={<SignUp />} />



      <Route path="newCase" element={<NewCase />}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
