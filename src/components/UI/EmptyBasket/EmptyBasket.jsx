import React from 'react'
import styles from './EmptyBasket.module.scss'
import logo from '../../../img/EmptyBasket.svg'

export default function EmptyBasket() {
  return (
    <div className={styles.emptyBasket}>
      <div className={styles.container}>
        <div
          className={styles.img}
          onClick={() => (window.location.href = '/')}
        >
          <img src={logo} alt="LOGO" />
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>В вашей корзине пока пусто</h2>
          <p className={styles.subTitle}>
            Тут появятся товары, которые вы закажете
          </p>
        </div>
        <button
          className={styles.btn}
          onClick={() => (window.location.href = '/')}
        >
          Вернуться в меню
        </button>
      </div>
    </div>
  )
}
