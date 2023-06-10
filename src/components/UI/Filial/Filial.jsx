import React, { useEffect } from 'react'
import styles from './Filial.module.scss'

export default function Filial({ value }) {
  return (
    <li className={styles.card}>
      <div className={styles.card__top}>
        <span>
          {value.name} <box-icon name="chevron-right"></box-icon>
        </span>
        <p>{value.description}</p>
      </div>
      <div className={styles.card__bottom}>
        <p>Часы работы</p>
        <h2>
          {value.from_time}
          {value.to_time}
        </h2>
      </div>
    </li>
  )
}
