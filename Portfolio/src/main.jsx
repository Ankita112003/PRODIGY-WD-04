import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Contact from './components/Contact/Contact.jsx'
import Experience from './components/Experience/Experiences.jsx'
import Projects from './components/Projects/Projects.jsx'


const router=createBrowserRouter (
  createRoutesFromElements(
    <Route  path='/' element={ <Layout />}>
      <Route  path='' element={ <About />}/>
      <Route  path='skills' element={ <Skills />}/>
      <Route  path='contact' element={ <Contact />}/>
      <Route  path='projects' element={ <Projects />}/>
      <Route  path='experiences' element={ <Experience />}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
