import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import { useTheme } from 'styled-components'

import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

import {
  CkeckoutContainer,
  InputRadio,
  OrderDataForm,
  OrderItems,
  Item,
  Actions,
} from './styles'

export function Checkout() {
  const theme = useTheme()
  const navigate = useNavigate()

  const {
    productsSelectd,
    addProductInOrder,
    removeProductInOrder,
    deleteProductInOrder,
  } = useContext(OrderContext)

  const summary = productsSelectd.reduce((acc, next) => {
    return (acc = acc + next.value * next.quantity)
  }, 0)

  function formatMoney(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  function checkout() {
    navigate('/success')
  }

  const hasProductInOrder = productsSelectd.length > 0
  const buttonConfirmDisabled = !hasProductInOrder

  return (
    <CkeckoutContainer>
      <OrderDataForm>
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
            <input type="text" placeholder="CEP" className="cep" />
            <input type="text" placeholder="Rua" className="street" />
            <input type="text" placeholder="Número" className="number" />
            <div className="complement">
              <input type="text" placeholder="Complemento" />
              <span>Opcional</span>
            </div>
            <input type="text" placeholder="Bairro" className="neighborhood" />
            <input type="text" placeholder="Cidade" className="city" />
            <input type="text" placeholder="UF" className="uf" />
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
            <InputRadio>
              <input type="radio" name="method" id="credit" />
              <CreditCard size={16} color={theme['purple-300']} />
              Cartão de crédito
            </InputRadio>
            <InputRadio checked>
              <input type="radio" name="method" id="debit" />
              <Bank size={16} color={theme['purple-300']} />
              Cartão de débito
            </InputRadio>
            <InputRadio>
              <input type="radio" name="method" id="money" />
              <Money size={16} color={theme['purple-300']} />
              Dinheiro
            </InputRadio>
          </footer>
        </section>
      </OrderDataForm>
      <OrderItems>
        <h1>Cafés selecionados</h1>
        <section>
          <div>
            {productsSelectd.map((product) => (
              <Item key={product.id}>
                <img src={product.imageUrl} alt="" />
                <Actions>
                  <p>{product.title}</p>
                  <div>
                    <div>
                      <button onClick={() => removeProductInOrder(product.id)}>
                        <Minus size={14} weight="bold" />
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => addProductInOrder(product)}>
                        <Plus size={14} weight="bold" />
                      </button>
                    </div>
                    <button onClick={() => deleteProductInOrder(product.id)}>
                      <Trash size={16} weight="bold" />
                      <span>Remover</span>
                    </button>
                  </div>
                </Actions>
                <label htmlFor="">R$ 9,90</label>
              </Item>
            ))}
          </div>

          <p>
            <span>Total de itens</span>
            {formatMoney(summary)}
          </p>
          <p>
            <span>Entrega</span>
            {hasProductInOrder ? 'R$ 3,50' : 'R$ 0,00'}
          </p>
          <h1>
            <span>Total</span>
            {hasProductInOrder ? formatMoney(summary + 3.5) : 'R$ 0,00'}
          </h1>
          <button disabled={buttonConfirmDisabled} onClick={checkout}>
            Confirmar pedido
          </button>
        </section>
      </OrderItems>
    </CkeckoutContainer>
  )
}
