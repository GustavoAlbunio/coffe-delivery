import { Minus, Plus, ShoppingCartSimple, X } from 'phosphor-react'

import { Content, Filters, CardList, Card, Actions } from './styles'

import { Banner } from './components/Banner'
import { useContext, useState } from 'react'
import { Coffee, OrderContext } from '../../contexts/OrderContext'
import { NavLink } from 'react-router-dom'

export function Home() {
  const {
    products,
    addProductInOrder,
    removeProductInOrder,
    productsSelectedAndQuantitys,
  } = useContext(OrderContext)

  const [filter, setFilter] = useState('')

  const productsFiltered = products.filter((products) => {
    if (filter) return products.tags.includes(filter)

    return true
  })

  return (
    <>
      <Banner />

      <Content>
        <header>
          <h1>Nossos cafés</h1>
          <Filters>
            <span onClick={() => setFilter('tradicional')}>Tradicional</span>
            <span onClick={() => setFilter('especial')}>Especial</span>
            <span onClick={() => setFilter('com leite')}>Com leite</span>
            <span onClick={() => setFilter('alcoólico')}>Alcóolico</span>
            <span onClick={() => setFilter('gelado')}>Gelado</span>
            {filter && (
              <span className="clear" onClick={() => setFilter('')}>
                <X />
              </span>
            )}
          </Filters>
        </header>

        <CardList>
          {productsFiltered.map((product: Coffee) => (
            <Card key={product.id}>
              <img src={product.imageUrl} alt="" />
              <div>
                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <section>
                <p>
                  R$
                  <span>
                    {product.value.toLocaleString('pt-BR').padEnd(4, '0')}
                  </span>
                </p>
                <Actions>
                  <div>
                    <button onClick={() => removeProductInOrder(product.id)}>
                      <Minus weight="bold" />
                    </button>
                    <span>{productsSelectedAndQuantitys[product.id] || 0}</span>
                    <button onClick={() => addProductInOrder(product)}>
                      <Plus weight="bold" />
                    </button>
                  </div>
                  <NavLink to="/checkout">
                    <ShoppingCartSimple weight="fill" size={24} />
                  </NavLink>
                </Actions>
              </section>
            </Card>
          ))}
        </CardList>
      </Content>
    </>
  )
}
