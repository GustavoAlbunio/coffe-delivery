import { Coffee } from '../../contexts/OrderContext'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
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
