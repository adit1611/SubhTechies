import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Commponents/Home.jsx'
import About from './Commponents/About.jsx'
import Contact from './Commponents/Contact.jsx'
import Service from './Commponents/service.jsx'
import Webservice from './subcomp/Webservice.jsx'
import Appservice from './subcomp/Appservice.jsx'
import Tech from './subcomp/Tech.jsx'
import Content from './subcomp/Content.jsx'
import Editing from './subcomp/Editing.jsx'
import Graphics from './subcomp/Graphics.jsx'


const connection = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/SubhTechies/' element={<Layout />} >
      <Route path = '' element={<Home />}/>
      <Route path = 'service' element={<Service />}/>
      <Route path = 'about' element={<About />}/>
      <Route path = 'contact' element={<Contact />}/>
      <Route path = 'Webservice' element={<Webservice />}/>
      <Route path = 'Appservice' element={<Appservice />}/>
      <Route path = 'Tech' element={<Tech />}/>
      <Route path = 'Graphics' element={<Graphics />}/>
      <Route path = 'Content' element={<Content />}/>
      <Route path = 'Editing' element={<Editing />}/>
      </Route>
   )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={connection} />
  </React.StrictMode>,
)