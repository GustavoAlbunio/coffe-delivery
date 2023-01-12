import { Address, Coffee, Payment } from '../../contexts/OrderContext'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  ADD_ADDRESS = 'ADD_ADDRESS',
  ADD_PAYMENT = 'ADD_PAYMENT',
}

export function addNewProductAction(product: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProductAction(productId: Number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  }
}

export function deleteProductAction(productId: Number) {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: {
      productId,
    },
  }
}

export function addAddressInOrderAction(address: Address) {
  return {
    type: ActionTypes.ADD_ADDRESS,
    payload: {
      address,
    },
  }
}

export function addPaymentInOrderAction(payment: Payment) {
  return {
    type: ActionTypes.ADD_PAYMENT,
    payload: {
      payment,
    },
  }
}
