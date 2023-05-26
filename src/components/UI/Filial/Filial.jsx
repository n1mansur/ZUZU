import React from 'react'
import styles from './Filial.module.scss'

export default function Filial({ value }) {
  
  return (
    <li className={styles.card}>
      <div className={styles.card__top}>
        <span>
          {value.filial} <box-icon name="chevron-right"></box-icon>
        </span>
        <p>{value.location}</p>
      </div>
      <div className={styles.card__bottom}>
        <p>Часы работы</p>
        <h2>{value.hours}</h2>
      </div>
    </li>
  )
}
