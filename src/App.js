import React from 'react'
//react router feataures
import {createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
    } from "react-router-dom"


import Headercontainer from './Layouts/Headercontainer.jsx'
import Home from './Headerpages/Home.jsx'
import About from './Headerpages/About.jsx'
import Developer from './Headerpages/Developer.jsx'
import Books from './Headerpages/Books.jsx'
import Error from './Headerpages/Error.jsx'



function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
           <Route path='/' element={<Headercontainer/>}>
           <Route  index element={<Home/>}/>
           <Route path='/About'  element={<About/>}/>
           <Route path='/Developer'  element={<Developer/>}/>
           <Route path='/Book'  element={<Books/>}/>
           <Route path='*'  element={<Error/>}/>

           </Route> 
        )
    )

  return (
    <div className='main-container'>
             <RouterProvider router={router} />
 </div>
  )
}

export default App
