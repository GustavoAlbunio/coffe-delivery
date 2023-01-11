import styled from 'styled-components'

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      line-height: 1.3;
      font-weight: 800;
    }
  }
`

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
    font-weight: bold;
    border-radius: 999px;
    color: ${(props) => props.theme['yellow-300']};
    border: 1px solid ${(props) => props.theme['yellow-300']};
    cursor: pointer;
  }
`

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 3.375rem 0;
`

export const Card = styled.div`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 100%;
    margin-top: -1.25rem;
  }

  & > div {
    font-size: 0.625rem;
    text-transform: uppercase;
    margin-top: 0.75rem;

    display: flex;
    gap: 0.25rem;

    span {
      padding: 0.25rem 0.5rem;
      font-weight: bold;
      border-radius: 999px;
      line-height: 1.3;
      background: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-500']};
    }
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 1rem;
  }

  & > p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    text-align: center;
    margin: 0.5rem 0 2rem;
    line-height: 1.3;
  }

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 0.875rem;

      span {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        margin-left: 0.25rem;
        font-weight: 800;
      }
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    padding: 0.875rem 0.5rem;
    background: ${(props) => props.theme['gray-400']};
    border-radius: 6px;

    display: flex;
    gap: 0.25rem;

    span {
      width: 20px;
      text-align: center;
    }

    button {
      border: 0;
      background: transparent;
      color: ${(props) => props.theme['purple-300']};
      font-weight: 700;
      cursor: pointer;

      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme['purple-500']};
      }
    }
  }

  a {
    background: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme.white};
    padding: 0.625rem;
    border-radius: 6px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    &:hover {
      background: ${(props) => props.theme['purple-300']};
    }
  }
`
