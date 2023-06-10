import { request } from './api'

export const getAllProducts = () =>
  request.get('products').then((res) => res.data)
export const getAllBranches = () => request.get('branches')
