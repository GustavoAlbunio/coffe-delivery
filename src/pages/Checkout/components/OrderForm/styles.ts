import styled, { css } from 'styled-components'

export const OrderFormContainer = styled.main`
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
    border-radius: 6px;

    header {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;

      h2 {
        font-size: 1rem;
        line-height: 1.3;
        font-weight: 400;
      }

      span {
        font-size: 0.875rem;
        line-height: 1.3;
      }
    }

    main {
      display: grid;
      gap: 1rem;
      margin-top: 2rem;

      grid-template-columns: 3fr 4fr 1fr;
      grid-template-areas:
        'cep . .'
        'street street street'
        'number complement complement'
        'neighborhood city uf';

      .cep {
        grid-area: cep;
      }

      .street {
        grid-area: street;
      }

      .number {
        grid-area: number;
      }

      .complement {
        grid-area: complement;
      }

      .neighborhood {
        grid-area: neighborhood;
      }

      .city {
        grid-area: city;
      }

      .uf {
        grid-area: uf;
      }

      & > div {
        position: relative;
        display: flex;
        align-items: center;

        span {
          position: absolute;
          right: 0.75rem;
          font-size: 0.75rem;
          font-style: italic;
          line-height: 1.6;
          color: ${(props) => props.theme['gray-600']};
        }
      }

      input {
        background: ${(props) => props.theme['gray-300']};
        border: 1px solid ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['gray-700']};
        font-size: 0.875rem;
        padding: 0.75rem;
        border-radius: 4px;
        width: 100%;

        &:focus {
          border: 1px solid ${(props) => props.theme['yellow-500']};
        }

        &::placeholder {
          color: ${(props) => props.theme['gray-600']};
        }
      }
    }

    footer {
      margin-top: 2rem;

      display: flex;
      justify-content: space-between;
      align-items: stretch;

      gap: 0.75rem;
    }
  }
`

interface InputRadioProps {
  checked?: boolean
}

export const InputRadio = styled.label<InputRadioProps>`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.75rem;
  position: relative;
  cursor: pointer;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  transition: background-color 0.2s;

  ${(props) =>
    props.checked
      ? css`
          background: ${(props) => props.theme['purple-100']};
          border: 1px solid ${(props) => props.theme['purple-300']};
        `
      : css`
          background: ${(props) => props.theme['gray-400']};
          border: 1px solid ${(props) => props.theme['gray-400']};
        `}

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  input {
    visibility: hidden;
    position: absolute;
  }
`
