import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { OrderContext } from '../../contexts/OrderContext'

import { Cart, HeaderContainer, Location } from './styles'

import coffeDeliveryLogo from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  const { totalProductsSelected } = useContext(OrderContext)

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
          {totalProductsSelected > 0 && <span>{totalProductsSelected}</span>}
        </Cart>
      </nav>
    </HeaderContainer>
  )
}
