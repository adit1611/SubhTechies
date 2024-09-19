import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Service from './Components/Service.jsx';
import Webservices from './subcomp/Webservice'; // Correct path
import Appservice from './subcomp/Appservice'; // Correct path
import Graphics from './subcomp/Graphics'; // Correct path
import Tech from './subcomp/Tech'; // Correct path
import Content from './subcomp/Content'; // Correct path
import Editing from './subcomp/Editing'; // Correct path

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/SubhTechies' element={<Layout />}>
      <Route index element={<Home />} /> {/* Default route */}
      <Route path='service' element={<Service />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='Webservices' element={<Webservices />} />
      <Route path='Appservice' element={<Appservice />} />
      <Route path='Tech' element={<Tech />} />
      <Route path='Graphics' element={<Graphics />} />
      <Route path='Content' element={<Content />} />
      <Route path='Editing' element={<Editing />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
