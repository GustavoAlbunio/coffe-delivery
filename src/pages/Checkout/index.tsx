import { useContext } from 'react'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { OrderContext } from '../../contexts/OrderContext'
import { OrderForm } from './components/OrderForm'

import { CkeckoutContainer, OrderItems, Item, Actions } from './styles'

const orderFormValidationSchema = zod.object({
  cep: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/, 'CEP inválido'),
  street: zod.string().min(3),
  number: zod.string().min(1),
  complement: zod.string(),
  neighborhood: zod.string().min(3),
  city: zod.string().min(2),
  uf: zod.string().min(2),
  method: zod.string(),
})

type OrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const {
    productsSelectd,
    addProductInOrder,
    removeProductInOrder,
    deleteProductInOrder,
    addAddressInOrder,
    addPaymentInOrder,
    payment,
    address,
  } = useContext(OrderContext)

  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      cep: address?.cep,
      street: address?.street,
      number: address?.number,
      complement: address?.complement,
      neighborhood: address?.neighborhood,
      city: address?.city,
      uf: address?.uf,
      method: payment?.method,
    },
  })

  const { handleSubmit } = orderForm

  const totals = productsSelectd.reduce((acc, next) => {
    return (acc = acc + next.value * next.quantity)
  }, 0)
  const hasProductInOrder = productsSelectd.length > 0
  const buttonConfirmDisabled = !hasProductInOrder

  function handleCheckout(data: OrderFormData) {
    const addressOrder = {
      cep: data.cep,
      street: data.street,
      number: data.number,
      complement: data.complement,
      neighborhood: data.neighborhood,
      city: data.city,
      uf: data.uf,
    }

    const totalsFormatted = Number(totals.toFixed(2))

    const paymentOrder = {
      method: data.method,
      totalProducts: totalsFormatted,
      totalFreight: 3.5,
      total: totalsFormatted + 3.5,
    }

    addAddressInOrder(addressOrder)
    addPaymentInOrder(paymentOrder)

    navigate('/success')
  }

  function formatMoney(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <CkeckoutContainer>
      <form onSubmit={handleSubmit(handleCheckout)} action="">
        <FormProvider {...orderForm}>
          <OrderForm />
        </FormProvider>

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
                        <button
                          type="button"
                          onClick={() => removeProductInOrder(product.id)}
                        >
                          <Minus size={14} weight="bold" />
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          type="button"
                          onClick={() => addProductInOrder(product)}
                        >
                          <Plus size={14} weight="bold" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteProductInOrder(product.id)}
                      >
                        <Trash size={16} weight="bold" />
                        <span>Remover</span>
                      </button>
                    </div>
                  </Actions>
                  <label>{formatMoney(product.value * product.quantity)}</label>
                </Item>
              ))}
            </div>

            <p>
              <span>Total de itens</span>
              {formatMoney(totals)}
            </p>
            <p>
              <span>Entrega</span>
              {hasProductInOrder ? 'R$ 3,50' : 'R$ 0,00'}
            </p>
            <h1>
              <span>Total</span>
              {hasProductInOrder ? formatMoney(totals + 3.5) : 'R$ 0,00'}
            </h1>
            <button type="submit" disabled={buttonConfirmDisabled}>
              Confirmar pedido
            </button>
          </section>
        </OrderItems>
      </form>
    </CkeckoutContainer>
  )
}
