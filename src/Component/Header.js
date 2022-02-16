import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
        <h1>BrowserRouter</h1>
      <NavLink style={({isActive})=>{return{color:isActive? 'red':'blue'}}} to = '/home'>Home</NavLink>| |
      <NavLink style={({isActive})=>{return{color:isActive? 'red':'blue'}}} to = '/contact'>Contact</NavLink>| |
      <NavLink style={({isActive})=>{return{color:isActive? 'red':'blue'}}} to = '/support'>Support</NavLink> | |
      <Link to = '/career'>Career</Link> | |  
</div>
  )
}

export default Header


