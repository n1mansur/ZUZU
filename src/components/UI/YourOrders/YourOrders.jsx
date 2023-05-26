import React, { useState } from 'react'
import styles from './YourOrders.module.scss'
import OrderCard from '../OrderCard/OrderCard'
import { Link } from 'react-router-dom'

export default function YourOrders({ orders }) {
  return (
    <div className={styles.yourOrder}>
      <div className={styles.heroSection}>
        <h2 className={styles.title}>Ваш заказ</h2>
      </div>
      <ul className={styles.orderList}>
        {orders.map((el, i) => (
          <OrderCard el={el} key={i} />
        ))}
        <li className={styles.totalPrice}>
          <span>Доставка</span>
          <span>0 сум</span>
        </li>
      </ul>
      <div className={styles.totalSection}>
        <div>
          <span>Итого</span>
          <span>
            {orders.reduce((sum, el) => {
              return sum + el.price * el.count
            }, 0)}
            сум
          </span>
        </div>

        <Link to="/ordering">
          <button className={styles.totalBtn}>К оформление заказа</button>
        </Link>
      </div>
    </div>
  )
}
