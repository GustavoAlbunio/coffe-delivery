import styled from 'styled-components'

import backgroundImg from '../../../../assets/background_home.png'

export const BannerContainer = styled.div`
  background: url(${backgroundImg});
`

export const Main = styled.main`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 5.75rem 0;

  display: flex;
  align-items: center;
  gap: 3.5rem;

  main {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      color: ${(props) => props.theme['gray-900']};
      line-height: 1.3;
      font-weight: 800;
    }

    p {
      color: ${(props) => props.theme['gray-900']};
      font-size: 1.25rem;
      line-height: 1.3;
      margin-top: 1rem;
    }
  }
`

export const Differentials = styled.div`
  margin-top: 4.125rem;

  display: flex;
  gap: 2.5rem;

  section {
    line-height: 1.3;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`

const DIFFERENTIALS_COLORS = {
  yellow: 'yellow-300',
  yellowDark: 'yellow-500',
  purple: 'purple-300',
  gray: 'gray-700',
} as const

interface DifferentialProps {
  differentialColor: keyof typeof DIFFERENTIALS_COLORS
}

export const Differential = styled.div<DifferentialProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.theme[DIFFERENTIALS_COLORS[props.differentialColor]]};
    padding: 0.5rem;
    border-radius: 50%;
    box-sizing: initial;
  }
`
