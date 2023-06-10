import React, { useState } from 'react'
import styles from './Ordering.module.scss'
import { useSelector } from 'react-redux'
import YourOrders from '../../UI/YourOrders/YourOrders'

export default function Ordering() {
  const orders = useSelector((orders) => orders)

  const getDeliveryType = (e) => {
    const currentInp = e.target
    //if (e.target == document.getElementById(currentInp.value)) {
    //  console.log(e.target)
    //}
    document.getElementById(currentInp.value).classList.add(styles.active)
  }

  return (
    <div className={styles.ordering}>
      <div className={styles.ordering__container}>
        <div className={styles.ordering__header}>
          <h2 className={styles.title}>Оформление заказа</h2>
        </div>
        <div className={styles.ordering__section}>
          <div className={styles.personalData}>
            <h2>Личные данные</h2>
            <form>
              <label>
                Имя
                <input type="text" placeholder="Введите имя" />
              </label>
              <label>
                Контакты
                <input type="text" placeholder="Введите номер" />
              </label>
            </form>
          </div>
          <div className={styles.deliveryType}>
            <h2>Тип доставки</h2>
            <form onChange={(e) => getDeliveryType(e)}>
              <label id="Delivery">
                Доставка
                <input type="radio" name="deliveryType" value="Delivery" />
              </label>
              <label id="Pickup">
                Самовывоз
                <input type="radio" name="deliveryType" value="Pickup" />
              </label>
            </form>
          </div>
        </div>
      </div>
      <YourOrders orders={orders} />
    </div>
  )
}
