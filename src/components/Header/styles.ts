import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 6.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

const BaseNavLisk = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  font-size: 0.875rem;
  border-radius: 6px;
  text-decoration: none;
`

export const Location = styled(BaseNavLisk)`
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-300']};

  display: flex;
  gap: 0.25rem;
`

export const Cart = styled(BaseNavLisk)`
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-300']};
  position: relative;

  span {
    position: absolute;
    top: -8px;
    right: -8px;

    background: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};
    width: 20px;
    height: 20px;
    font-weight: bold;
    font-size: 0.75rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
