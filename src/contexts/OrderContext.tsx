import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

import {
  addAddressInOrderAction,
  addNewProductAction,
  deleteProductAction,
  removeProductAction,
  addPaymentInOrderAction,
} from '../reducers/orders/actions'
import { orderReducer, Product } from '../reducers/orders/reducer'

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

export interface Address {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  uf: string
}

export interface Payment {
  method: string
  totalProducts: number
  totalFreight: number
  total: number
}

type productsSelectedAndQuantitys = {
  [key: string]: number
}

interface OrderContextType {
  products: Coffee[]
  productsSelectd: Product[]
  totalProductsSelected: number
  productsSelectedAndQuantitys: productsSelectedAndQuantitys
  address: Address | null
  payment: Payment | null
  addProductInOrder: (product: Coffee) => void
  removeProductInOrder: (productId: number) => void
  deleteProductInOrder: (productId: number) => void
  addAddressInOrder: (address: Address) => void
  addPaymentInOrder: (payment: Payment) => void
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

  const [orderState, dispatch] = useReducer(
    orderReducer,
    {
      products: [],
      address: null,
      payment: null,
    },
    () => {
      const storedStateJSON = localStorage.getItem(
        '@coffee-delivery:order-state-1.0.0',
      )

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(orderState)

    localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)
  }, [orderState])

  function addProductInOrder(product: Coffee) {
    dispatch(addNewProductAction(product))
  }

  function removeProductInOrder(productId: number) {
    dispatch(removeProductAction(productId))
  }

  function deleteProductInOrder(productId: number) {
    dispatch(deleteProductAction(productId))
  }

  function addAddressInOrder(address: Address) {
    dispatch(addAddressInOrderAction(address))
  }

  function addPaymentInOrder(payment: Payment) {
    dispatch(addPaymentInOrderAction(payment))
  }

  const { products: productsSelectd, address, payment } = orderState

  const totalProductsSelected = productsSelectd.length

  const productsSelectedAndQuantitys = productsSelectd.reduce(
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
        productsSelectd,
        totalProductsSelected,
        productsSelectedAndQuantitys,
        addProductInOrder,
        removeProductInOrder,
        deleteProductInOrder,
        addAddressInOrder,
        addPaymentInOrder,
        address,
        payment,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
