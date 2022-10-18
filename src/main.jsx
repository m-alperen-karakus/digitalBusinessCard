import React from 'react'
import {createRoot} from 'react-dom/client'
import PersonalInfo from "./components/PersonalInformation"
import Footer from "./components/Footer"
import './index.css'
import Photo from "./assets/profilPhoto.jpeg"


function Page(){
  return (<>
  <img src={Photo} className="photo"></img>
  <PersonalInfo />
  <Footer />
  </>)
}

const root = createRoot(document.getElementById("root"))

root.render(<Page />)
