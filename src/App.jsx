import { useState } from 'react'
import './App.css'
import NavBar from '../components/NavBar/NavBar'
import CompanyHistory from '../components/CompanyHistory/CompanyHistory'
import PastWork from '../components/PastWork/pastWork'
import Staff from '../components/Staff/staff'
import Contact from '../components/Contact/contact'
import Links from '../components/Links/links'


function App() {
  const [page, setPage] = useState("home")
}

  const handleClick = (page1) => {
    setPage(page1)
  

  const history = "lorem ipsum"
  const work = "lorem ipsum2"
  const staffing = "lorem ipsum3"
  const contacts = "lorem ipsum4"
  const linked = "lorem ipsum5"

  return (
      <>
      < NavBar handleClick = {handleClick} />
      
      {page === "home" && <p><h1>Company website</h1>Welcome to our company website</p>}
      {page === "companyHistory" && < CompanyHistory history = {history}/>}
      {page === "pastWork" && < PastWork work = {work}/>}
      {page === "staff" && < Staff staffing = {staffing}/>}
      {page === "contact" && < Contact contacts = {contacts}/>}
      {page === "links" && < Links linked = {linked}/>}
      
        </>
      )
    }

export default App
