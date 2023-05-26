import React from 'react'
import styles from './Card.module.scss'
import ModalButton from '../../MUI/ModalButton/ModalButton'

export default function Card({ el, setOpen }) {
  const available = el.status ? (
    <ModalButton text={'Выбрать'} el={el} setOpen={setOpen} />
  ) : (
    <button className={styles.button}>Выбрать</button>
  )
  const unavailableClass = el.status ? '' : styles.unav
  const unavailable = el.status ? (
    ''
  ) : (
    <div className={styles.unavailable}>
      <span>Временно не доступен</span>
    </div>
  )
  return (
    <li className={styles.card}>
      <div className={styles.card__img}>
        <img className={unavailableClass} src={el.img} alt="Pizza" />
        {unavailable}
      </div>
      <div className={styles.card__text}>
        <h3 className={styles.card__title}>{el.name}</h3>
        <p className={styles.card__subtitle}>{el.comment}</p>
        <div className={styles.card__price}>
          <span>От {el.price} сумов</span>
          {available}
        </div>
      </div>
    </li>
  )
}
