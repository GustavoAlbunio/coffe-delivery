import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'

import { InputRadio, OrderFormContainer } from './styles'

export function OrderForm() {
  const theme = useTheme()
  const { register, watch, setValue, setFocus } = useFormContext()

  const methodSelected = watch('method')

  function cepQuery(cep: string) {
    const cepWithNumber = cep.replace(/\D+/g, '')
    const urlQuery = `https://viacep.com.br/ws/${cepWithNumber}/json/`

    if (cepWithNumber) {
      fetch(urlQuery).then((response) =>
        response.json().then((data: any) => {
          setValue('street', data.logradouro)
          setValue('neighborhood', data.bairro)
          setValue('city', data.localidade)
          setValue('uf', data.uf)

          setFocus('number')
        }),
      )
    }
  }

  return (
    <OrderFormContainer>
      <h1>Complete seu pedido</h1>
      <section>
        <header>
          <MapPinLine size={22} color={theme['yellow-500']} />
          <div>
            <h2>Endereço de Entrega</h2>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </header>

        <main>
          <input
            type="text"
            placeholder="CEP"
            className="cep"
            {...register('cep')}
            onBlur={(e) => cepQuery(e.target.value)}
          />
          <input
            type="text"
            placeholder="Rua"
            className="street"
            {...register('street')}
          />
          <input
            type="text"
            placeholder="Número"
            className="number"
            {...register('number')}
          />
          <div className="complement">
            <input
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
            <span>Opcional</span>
          </div>
          <input
            type="text"
            placeholder="Bairro"
            className="neighborhood"
            {...register('neighborhood')}
          />
          <input
            type="text"
            placeholder="Cidade"
            className="city"
            {...register('city')}
          />
          <input
            type="text"
            placeholder="UF"
            className="uf"
            {...register('uf')}
          />
        </main>
      </section>
      <section>
        <header>
          <CurrencyDollar size={22} color={theme['purple-300']} />
          <span>
            <h2>Pagamento</h2>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </span>
        </header>

        <footer>
          <InputRadio checked={methodSelected === 'credit'}>
            <input
              type="radio"
              id="credit"
              value="credit"
              {...register('method')}
            />
            <CreditCard size={16} color={theme['purple-300']} />
            Cartão de crédito
          </InputRadio>
          <InputRadio checked={methodSelected === 'debit'}>
            <input
              type="radio"
              value="debit"
              id="debit"
              {...register('method')}
            />
            <Bank size={16} color={theme['purple-300']} />
            Cartão de débito
          </InputRadio>
          <InputRadio checked={methodSelected === 'money'}>
            <input
              type="radio"
              value="money"
              id="money"
              {...register('method')}
            />
            <Money size={16} color={theme['purple-300']} />
            Dinheiro
          </InputRadio>
        </footer>
      </section>
    </OrderFormContainer>
  )
}
