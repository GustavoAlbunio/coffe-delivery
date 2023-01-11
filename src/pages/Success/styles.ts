import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 5rem auto 0;

  h1 {
    color: ${(props) => props.theme['yellow-500']};
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
  }

  h3 {
    font-weight: 400;
    margin-bottom: 2.5rem;
  }

  & > div {
    display: flex;
    align-self: center;
    justify-content: space-between;
    gap: 6.375rem;

    main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      flex: 1;
      padding: 2.5rem;

      background: linear-gradient(
            ${(props) => props.theme['gray-100']},
            ${(props) => props.theme['gray-100']}
          )
          padding-box,
        linear-gradient(
            to right,
            ${(props) => props.theme['yellow-300']},
            ${(props) => props.theme['purple-300']}
          )
          border-box;
      border-radius: 6px 36px;
      border: 1px solid transparent;
    }

    img {
      flex: 1;
    }
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

export const Info = styled.section<DifferentialProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  line-height: 1.3;

  svg {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.theme[DIFFERENTIALS_COLORS[props.differentialColor]]};
    padding: 0.5rem;
    border-radius: 50%;
    box-sizing: initial;
  }
`
