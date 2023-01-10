import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

import {
  addNewProductAction,
  removeNewProductAction,
} from '../reducers/orders/actions'
import { orderReducer } from '../reducers/orders/reducer'

import americanImg from '../assets/coffees/american.svg'
import arabisImg from '../assets/coffees/arabic.svg'
import capuccinoImg from '../assets/coffees/capuccino.svg'
import creamyExpressImg from '../assets/coffees/creamy_express.svg'
import cubanImg from '../assets/coffees/cuban.svg'
import expressImg from '../assets/coffees/express.svg'
import hawaiianImg from '../assets/coffees/hawaiian.svg'
import hotChocolateImg from '../assets/coffees/hot_chocolate.svg'
import iceExpressImg from '../assets/coffees/ice_express.svg'
import irishImg from '../assets/coffees/irish.svg'
import latteImg from '../assets/coffees/latte.svg'
import macchiatoImg from '../assets/coffees/macchiato.svg'
import mocaccinoImg from '../assets/coffees/mocaccino.svg'
import withMilkImg from '../assets/coffees/with_milk.svg'

export interface Coffee {
  id: number
  imageUrl: string
  title: string
  description: string
  value: number
  tags: string[]
}

type productsSelectedAndQuantitys = {
  [key: string]: number
}

interface OrderContextType {
  products: Coffee[]
  addProductInOrder: (product: Coffee) => void
  removeProductInOrder: (productId: number) => void
  totalProductsSelected: number
  productsSelectedAndQuantitys: productsSelectedAndQuantitys
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [products] = useState<Coffee[]>([
    {
      id: 1,
      imageUrl: expressImg,
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      value: 9.9,
      tags: ['tradicional'],
    },
    {
      id: 2,
      imageUrl: americanImg,
      title: 'Expresso Americado',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
      tags: ['tradicional'],
    },
    {
      id: 3,
      imageUrl: creamyExpressImg,
      title: 'Expresso Cremoso',
      description: 'Café expresso com espuma cremosa',
      value: 9.9,
      tags: ['tradicional'],
    },
    {
      id: 4,
      imageUrl: iceExpressImg,
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      value: 9.9,
      tags: ['tradicional', 'gelado'],
    },
    {
      id: 5,
      imageUrl: withMilkImg,
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      value: 9.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 6,
      imageUrl: latteImg,
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      value: 9.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 7,
      imageUrl: capuccinoImg,
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      value: 9.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 8,
      imageUrl: macchiatoImg,
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      value: 9.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 9,
      imageUrl: mocaccinoImg,
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      value: 9.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 10,
      imageUrl: hotChocolateImg,
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      value: 9.9,
      tags: ['especial', 'com leite'],
    },
    {
      id: 11,
      imageUrl: cubanImg,
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      value: 9.9,
      tags: ['especial', 'alcoólico', 'gelado'],
    },
    {
      id: 12,
      imageUrl: hawaiianImg,
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      value: 9.9,
      tags: ['especial'],
    },
    {
      id: 13,
      imageUrl: arabisImg,
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      value: 9.9,
      tags: ['especial'],
    },
    {
      id: 14,
      imageUrl: irishImg,
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açucar e chantilly',
      value: 9.9,
      tags: ['especial', 'alcoólico'],
    },
  ])

  const [orderState, dispatch] = useReducer(orderReducer, {
    products: [],
    address: null,
  })

  function addProductInOrder(product: Coffee) {
    dispatch(addNewProductAction(product))
  }

  function removeProductInOrder(productId: number) {
    dispatch(removeNewProductAction(productId))
  }

  const totalProductsSelected = orderState.products.length

  const productsSelectedAndQuantitys = orderState.products.reduce(
    (acc: productsSelectedAndQuantitys, next) => {
      acc[next.id] = next.quantity

      return acc
    },
    {},
  )

  return (
    <OrderContext.Provider
      value={{
        products,
        addProductInOrder,
        removeProductInOrder,
        totalProductsSelected,
        productsSelectedAndQuantitys,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
