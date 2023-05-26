import React from 'react'
import styles from './OrderCard.module.scss'

export default function OrderCard({ el }) {
  return (
    <li className={styles.orderItem}>
      <span>
        {el.count} x {el.name}
      </span>
      <span>{el.price} сум</span>
    </li>
  )
}
