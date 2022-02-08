import Logo from '../assets/logos/failen9.jpg'
import NavBar from './Navbar/navBar'


function Header() {
  return(
  <div>
  <header>
    <h1>
      Data et scouting analysis Failen9
    </h1>
    <img src= {Logo} alt='Logo Failen9'/>
  </header>
  <NavBar />
  </div>
  )
}

export default Header