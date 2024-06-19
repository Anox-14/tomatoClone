import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from '../components/Header' 
import Middle from '../components/Middle' ;
import ZomatoApp from '../components/ZomatoApp' 
import Explore from '../components/Explor'
import Footer from '../components/Footer'


const App = () => {
  const [block, setBlock ] = useState(true)
 const getData = (data)=>{
  setBlock(data)
 }
  return (
    <div >
      <Header view={block} ></Header>
      <Middle getData={getData}/>
      {/* <RouterProvider router={router} /> */}
      <ZomatoApp view={block}/>
      <Explore view={block}/>
      <Footer view={block}/>
    </div>
  )
}

export default App
