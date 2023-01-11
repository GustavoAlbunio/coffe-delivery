import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

import { SuccessContainer, Info } from './styles'

import successImg from '../../assets/success.svg'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>

      <div>
        <main>
          <Info differentialColor="purple">
            <MapPin weight="fill" />
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </Info>
          <Info differentialColor="yellow">
            <Clock weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30min</strong>
            </div>
          </Info>
          <Info differentialColor="yellowDark">
            <CurrencyDollar weight="fill" />
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </Info>
        </main>
        <img src={successImg} alt="" />
      </div>
    </SuccessContainer>
  )
}
