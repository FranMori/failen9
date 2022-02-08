import React, {Component} from 'react'
import  MenuItems  from './menuItems'
import './navBar.css'
class Navbar extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul className='navUl'>

          {MenuItems.map((item, index) => {
             return(
                <li key={index}> <a className={item.cName} href={item.url}>{item.title}</a></li>
             ) 
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar