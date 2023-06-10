import React from 'react'
import styles from './BasketCard.module.scss'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import {
  deleteActionCreater,
  minusActionCreater,
  plusActionCreater,
} from '../../../redux/redux'
const img = 'images/pizza.png'

export default function BasketCard({ order }) {
  const dispatch = useDispatch()
  const minusFn = (order) => {
    dispatch(minusActionCreater(order))
  }
  const plusFn = (order) => {
    dispatch(plusActionCreater(order))
  }
  const deleteFn = (order) => {
    dispatch(deleteActionCreater(order))
  }

  return (
    <li className={styles.basket__item}>
      <div className={styles.pizzaInfo}>
        <div className={styles.item__img}>
          <img src={order.img || img} alt="Img" />
        </div>
        <div className={styles.item__title}>
          <h3>{order.name}</h3>
          <p>{order.comment}</p>
        </div>
      </div>
      <div className={styles.quantity}>
        <span>{order.price} сум</span>
        <div className={styles.item__btns}>
          <button className={styles.minus} onClick={() => minusFn(order)}>
            <RemoveIcon />
          </button>
          <span>{order.count}</span>
          <button className={styles.plus} onClick={() => plusFn(order)}>
            <AddIcon />
          </button>
          <button onClick={() => deleteFn(order)}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </li>
  )
}
