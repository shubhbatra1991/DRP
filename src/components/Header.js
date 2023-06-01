import * as React from "react"

import { 
  Nav, 
  NavLink, 
  Bars,
  NavMenu,
  NavBtn,
} from './styles/HeaderStyles.jsx'
import { Button } from './Button'

import { MenuData } from '../Data/MenuData'

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">
        DRP
      </NavLink>
      <Bars />
      <NavMenu>
        { MenuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        )) }
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips"> Book a flight</Button>
      </NavBtn>
    </Nav>
  )
}

export default Header