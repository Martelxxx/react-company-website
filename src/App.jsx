import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CompanyHistory from './components/CompanyHistory/CompanyHistory'
import PastWork from './components/PastWork/pastWork'
import Staff from './components/Staff/Staff'
import Contact from './components/Contact/contact'
import Links from './components/Links/Links'
import Home from './components/Home/home'


function App() {

  const [page, setPage] = useState("home")

  const handleClick = (page1) => {
    setPage(page1)
  }

const history = "lorem ipsum"
const work = "lorem ipsum2"
const employees = [
  {
      name: 'Elena Torres',
      position: 'CEO',
      description: 'Visionary leader with a decade of experience in aerospace innovation and business strategy.'
  },
  {
      name: 'Michael Chen',
      position: 'COO',
      description: 'Operational wizard with a strong background in scaling tech companies and streamlining complex processes.'
  },
  {
      name: 'Samantha Lee',
      position: 'Chief Technology Officer',
      description: 'Expert in electric propulsion technology, spearheading research and development initiatives.'
  },
  {
      name: 'Raj Patel',
      position: 'Chief Financial Officer',
      description: 'Financial strategist with extensive experience in capital management and economic forecasting in tech industries.'
  },
  {
      name: 'Isabella Garcia',
      position: 'VP of Engineering',
      description: 'Leads the engineering team with a focus on innovation, quality, and efficiency in jet engine production.'
  },
  {
      name: 'David Kim',
      position: 'VP of Sales',
      description: 'Dynamic sales leader with a strong track record in global market expansion and strategic partnerships.'
  },
  {
      name: 'Linda Smith',
      position: 'VP of Marketing',
      description: 'Creative marketing guru, skilled in brand building and digital marketing strategies for high-tech products.'
  },
  {
      name: 'Aaron Zhou',
      position: 'Lead Software Engineer',
      description: 'Specializes in embedded systems and software for aerospace applications, focusing on safety and reliability.'
  },
  {
      name: 'Sophia Johnson',
      position: 'Human Resources Director',
      description: 'Human capital expert, dedicated to fostering an inclusive and high-performance workplace culture.'
  },
  {
      name: 'James Wilson',
      position: 'Supply Chain Manager',
      description: 'Efficiently manages supply chain logistics to support seamless production and distribution.'
  },
  {
      name: 'Emily Turner',
      position: 'Project Manager',
      description: 'Orchestrates complex projects from inception to delivery, ensuring timely completion within budget.'
  },
  {
      name: 'Benjamin Martinez',
      position: 'Quality Assurance Manager',
      description: 'Guarantees the highest quality standards for all IonX products through rigorous testing and evaluation.'
  },
  {
      name: 'Olivia Sanchez',
      position: 'Customer Support Manager',
      description: 'Ensures exceptional customer service, supporting clients with expertise and care.'
  },
  {
      name: 'Ethan Brown',
      position: 'Data Analyst',
      description: 'Analyzes performance metrics and data to drive strategic decisions and improve product outcomes.'
  },
  {
      name: 'Grace Kim',
      position: 'R&D Engineer',
      description: 'Innovates new materials and techniques for electric engine performance and sustainability.'
  }
]


  const contacts = "lorem ipsum4"
  const partners = [
    {
      title: 'EcoFlight Solutions',
      url: 'http://ecoflightsolutions.com',
      description: 'EcoFlight Solutions leads in sustainable aviation technology, providing advanced eco-friendly materials and engineering expertise to enhance the efficiency and environmental footprint of aircraft.'
    },
  {
      title: 'Quantum Batteries',
      url: 'http://quantumbatteries.com',
      description: 'Quantum Batteries is a leader in high-density energy storage solutions, specializing in next-generation battery technology for electric vehicles and aerospace applications.'
  },
  {
      title: 'Global Space Ventures',
      url: 'http://globalspaceventures.com',
      description: 'Global Space Ventures supports space exploration with innovative propulsion systems and spacecraft components, focusing on sustainable, cost-effective space missions.'
  },
  {
      title: 'AutoInnovate Motors',
      url: 'http://autoinnovatemotors.com',
      description: 'AutoInnovate Motors is at the forefront of electric vehicle technology, designing and manufacturing state-of-the-art electric engines that power the future of road transportation.'
  },
  {
      title: 'FuturSynth Materials',
      url: 'http://futursynthmaterials.com',
      description: 'FuturSynth Materials specializes in the development and supply of advanced synthetic materials that are critical for building the next generation of electric jet engines and rockets.'
  }
]
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
      {page === "staff" && < Staff employees = {employees}/>}
      {page === "contact" && < Contact contacts = {contacts}/>}
      {page === "links" && < Links partners = {partners}/>}
      
        </>
      )
    }

export default App
