import { Coffee } from '../../contexts/OrderContext'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function addNewProductAction(product: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeNewProductAction(productId: Number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  }
}
