import './NavBar.css';


const NavBar = ({handleClick}) => {
    return (
        <nav className="navbar">
        <ul>
            <li onClick={()=> handleClick("home")}>Home</li>
            <li onClick={()=> handleClick("companyHistory")}>Company History</li>
            <li onClick={()=> handleClick("pastWork")}>Past Work</li>
            <li onClick={()=> handleClick("staff")}>Staff</li>
            <li onClick={()=> handleClick("contact")}>Contact</li>
            <li onClick={()=> handleClick("links")}>Links</li>
        </ul>
        </nav>
    );
    }   
    
    export default NavBar;