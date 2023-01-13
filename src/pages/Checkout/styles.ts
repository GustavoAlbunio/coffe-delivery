import styled, { css } from 'styled-components'

export const CkeckoutContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;

  form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      margin-bottom: 1rem;
    }
  }
`

export const OrderItems = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};
  }

  section {
    padding: 2.5rem;
    background: ${(props) => props.theme['gray-200']};
    border-radius: 6px 44px;

    & > div {
      max-height: 18rem;
      overflow: hidden;
      overflow-y: auto;
      margin-bottom: 0.75rem;
      border-bottom: 1px solid ${(props) => props.theme['gray-400']};
      padding-bottom: 1.5rem;
    }

    p,
    h1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & > p {
      margin-bottom: 0.75rem;

      span {
        font-size: 0.875rem;
      }
    }

    & > h1 {
      font-size: 1.25rem;
      font-family: 'Roboto', sans-serif;
    }

    & > button {
      width: 100%;
      background: ${(props) => props.theme['yellow-300']};
      color: ${(props) => props.theme.white};
      border: 0;
      border-radius: 6px;
      margin-top: 1.5rem;
      font-weight: 700;
      padding: 0.75rem;
      text-transform: uppercase;
      cursor: pointer;

      transition: background-color 0.2s;

      &:not(:disabled):hover {
        background: ${(props) => props.theme['yellow-500']};
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`

export const Item = styled.div`
  & + div {
    border-top: 1px solid ${(props) => props.theme['gray-400']};
    padding-top: 1.5rem;
    margin-top: 1.5rem;
  }

  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  width: 100%;

  img {
    width: 4rem;
    height: 4rem;
  }

  label {
    flex: 1;
    text-align: right;
    font-weight: 700;
  }
`

export const Actions = styled.div`
  p {
    margin-bottom: 0.5rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button {
      background: ${(props) => props.theme['gray-400']};
      border: 0;
      border-radius: 6px;
    }

    & > div {
      background: ${(props) => props.theme['gray-400']};
      padding: 0.40625rem 0.5rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        cursor: pointer;
        line-height: 0;
        color: ${(props) => props.theme['purple-300']};

        &:hover {
          color: ${(props) => props.theme['purple-500']};
        }
      }
    }

    & > span {
      line-height: 1.3;
    }

    & > button {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${(props) => props.theme['purple-300']};

      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        color: ${(props) => props.theme['purple-500']};
        background: ${(props) => props.theme['gray-500']};
      }

      & > span {
        color: ${(props) => props.theme['gray-700']};
      }
    }
  }
`
