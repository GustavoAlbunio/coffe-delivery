import { MapPin, ShoppingCart } from 'phosphor-react'

import { Cart, HeaderContainer, Location } from './styles'

import coffeDeliveryLogo from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeDeliveryLogo} alt="" />
      </NavLink>
      <nav>
        {/* TO DO: Remover o to */}
        <Location to="/success">
          <MapPin weight="fill" size={20} />
          Porto Alegre, RS
        </Location>
        <Cart to="/checkout">
          <ShoppingCart weight="fill" size={22} />
          <span>0</span>
        </Cart>
      </nav>
    </HeaderContainer>
  )
}
