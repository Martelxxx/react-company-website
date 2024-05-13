import { useState } from 'react'
import './App.css'
import NavBar from '../components/NavBar/NavBar'
import CompanyHistory from '../components/CompanyHistory/CompanyHistory'
import PastWork from '../components/PastWork/pastWork'
import Staff from '../components/Staff/staff'
import Contact from '../components/Contact/contact'
import Links from '../components/Links/links'
import Home from '../components/Home/home'


function App() {
  const [page, setPage] = useState("home")


  const handleClick = (page1) => {
    setPage(page1)
  }

  const history = "lorem ipsum"
  const work = "lorem ipsum2"
  const staffing = "lorem ipsum3"
  const contacts = "lorem ipsum4"
  const linked = {title: "IonX, Inc. Partners", content: (
    <div>
      <h2>Our Partners</h2>
      <p>IonX, Inc. is proud to partner with some of the leading companies in the transportation and aerospace industries. Our partners are an essential part of our success, and we are committed to working together to deliver the highest quality products and services to our clients. Contact us today to learn more about our partners and how we can help you succeed.</p>
      <h2>Our Partnerships</h2>
      <p>At IonX, Inc., we are dedicated to building strong partnerships with companies that share our commitment to excellence. Our partners are an essential part of our success, and we are committed to working together to deliver the highest quality products and services to our clients. Contact us today to learn more about our partners and how we can help you succeed.</p>
      <h2>Our Commitment</h2>
      <p>At IonX, Inc., we are committed to delivering the highest quality products and services to our clients. Our partners are an essential part of our success, and we are dedicated to working together to deliver innovative solutions that meet the unique needs of our clients. Contact us today to learn more about our partners and how we can help you succeed.</p>
      <h2>Our Success</h2>
      <p>IonX, Inc. is proud to partner with some of the leading companies in the transportation and aerospace industries. Our partners are an essential part of our success, and we are committed to working together to deliver innovative solutions that meet the unique needs of our clients. Contact us today to learn more about our partners and how we can help you succeed.</p>
    </div>
  )}
  const homepage = {title: "IonX, Inc.", content: (
    <div>
      <h2>Empowering the Future of Transportation and Aerospace</h2>
      <p>IonX, Inc. is a leading provider of cutting-edge technology solutions for the transportation and aerospace industries. Our innovative products and services are designed to help our clients achieve their goals and stay ahead of the competition. With a team of experienced professionals and a commitment to excellence, we are dedicated to delivering the highest quality products and services to our clients. Contact us today to learn more about how we can help you succeed.</p>
      <h2>Our Journey</h2>
      <p>Founded in 2005, IonX, Inc. has grown to become a trusted partner for transportation and aerospace companies around the world. Our team of experts has decades of experience in the industry and is committed to delivering innovative solutions that meet the unique needs of our clients. From advanced propulsion systems to cutting-edge avionics, we offer a wide range of products and services to help our clients succeed in today's competitive marketplace.</p>
      <h2>What We Do</h2>
      <p>At IonX, Inc., we are dedicated to helping our clients achieve their goals and stay ahead of the competition. Our team of experts works closely with each client to develop customized solutions that meet their unique needs and deliver real results. From advanced propulsion systems to cutting-edge avionics, we offer a wide range of products and services to help our clients succeed in today's competitive marketplace. Contact us today to learn more about how we can help you succeed.</p>
      {/* list of electric jet engines, electric car engines, electric rockers */}
      <h2>Our Products</h2>
      <ul>
        <li>Electric Jet Engines</li>
        <li>Electric Car Engines</li>
        <li>Electric Rockets</li>
      </ul>
      <h2>Our Vision</h2>
      <p>At IonX, Inc., our vision is to empower the future of transportation and aerospace. We are committed to delivering innovative solutions that help our clients achieve their goals and stay ahead of the competition. With a team of experienced professionals and a commitment to excellence, we are dedicated to delivering the highest quality products and services to our clients. Contact us today to learn more about how we can help you succeed.</p>
      <h2>Our Values</h2> 
      <p>At IonX, Inc., we are guided by a set of core values that define who we are and how we do business. These values are the foundation of our company culture and guide our decisions and actions every day. Our values include:</p>
    </div>
  )}


  return (
      <>
      < NavBar handleClick = {handleClick} />
      
      {page === "home" && < Home homepage = {homepage}/>}
      {page === "companyHistory" && < CompanyHistory history = {history}/>}
      {page === "pastWork" && < PastWork work = {work}/>}
      {page === "staff" && < Staff staffing = {staffing}/>}
      {page === "contact" && < Contact contacts = {contacts}/>}
      {page === "links" && < Links linked = {linked}/>}
      
        </>
      )
    }

export default App
