import { Box, Modal } from '@mui/material'
import { useState } from 'react'
import styles from './Mmodal.module.scss'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import { addOrderActionCreater } from '../../../redux/redux'
const img = 'images/pizza.png'

export default function Mmodal({ open, setOpen }) {
  const dispatch = useDispatch()

  const [count, setCount] = useState(1)
  const handleClose = () => {
    setOpen(false)
    setCount(1)
  }
  const plus = () => setCount((old) => old + 1)
  const minus = () => (count > 1 ? setCount((old) => old - 1) : count)

  const addOrder = () => {
    const newOrder = {
      ...open,
      count,
    }
    dispatch(addOrderActionCreater(newOrder))
    handleClose()
    setCount(1)
  }
  return (
    <Modal
      open={Boolean(open)}
      onClose={handleClose}
      //aria-labopenledby="modal-modal-title"
      //aria-describedby="modal-modal-description"
    >
      <Box>
        <div className={styles.modal}>
          <button className={styles.close} onClick={handleClose}>
            <CloseIcon />
          </button>
          <div className={styles.img}>
            <img src={open?.img || img} alt="Order-img" />
          </div>
          <div className={styles.order__section}>
            <h2 className={styles.order__title}>{open?.name}</h2>
            <p className={styles.order__subTitle}>{open?.comment}</p>
            <div className={styles.btns}>
              <button className={styles.button} onClick={() => minus()}>
                <RemoveIcon />
              </button>
              <span>{count}</span>
              <button className={styles.button} onClick={() => plus()}>
                <AddIcon />
              </button>
              <button className={styles.buy} onClick={() => addOrder()}>
                Добавить <span>{count * open?.price} сум</span>
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  )
}
