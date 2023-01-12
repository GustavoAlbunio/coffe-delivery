import { useContext } from 'react'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

import { OrderContext } from '../../contexts/OrderContext'

import { SuccessContainer, Info } from './styles'

import successImg from '../../assets/success.svg'

export function Success() {
  const { payment, address } = useContext(OrderContext)

  function showPaymentMethod(method: string) {
    switch (method) {
      case 'credit':
        return 'Cartão de crédito'
      case 'debit':
        return 'Cartão de dédito'
      default:
        return 'Em dinheiro'
    }
  }

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
                Entrega em
                <strong>{` ${address.street}, ${address.number}`}</strong>
              </p>
              <span>{`${address.neighborhood} - ${address.city}, ${address.uf}`}</span>
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
              <strong>{showPaymentMethod(payment.method)}</strong>
            </div>
          </Info>
        </main>
        <img src={successImg} alt="" />
      </div>
    </SuccessContainer>
  )
}
