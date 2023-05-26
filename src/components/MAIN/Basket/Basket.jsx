import React from 'react'
import styles from './Basket.module.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import BasketCard from '../../UI/BasketCard/BasketCard'
import YourOrders from '../../UI/YourOrders/YourOrders'
import { useDispatch, useSelector } from 'react-redux'
import { clearActionCreater } from '../../../redux/redux'
import EmptyBasket from '../../UI/EmptyBasket/EmptyBasket'

export default function Basket() {
  const dispatch = useDispatch()
  const clearFn = (order) => {
    dispatch(clearActionCreater(order))
  }
  
  const orders = useSelector((orders) => orders)

  return (
    <>
      {orders[0] == undefined ? (
        <EmptyBasket />
      ) : (
        <div className={styles.basket}>
          <div className={styles.basket__container}>
            <div className={styles.hero__section}>
              <h2 className={styles.title}>Корзина</h2>
              <button className={styles.clear_basket} onClick={() => clearFn()}>
                <DeleteIcon />
                Очистить корзину
              </button>
            </div>
            <ul className={styles.basket__list}>
              {orders.map((order, i) => (
                <BasketCard order={order} key={i} />
              ))}
            </ul>
          </div>
          <YourOrders orders={orders} />
        </div>
      )}
    </>
  )
}
