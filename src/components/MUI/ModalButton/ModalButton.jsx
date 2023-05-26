import styles from './ModalButton.module.scss'

export default function ModalButton({ text, el, setOpen }) {
  const handleOpen = () => setOpen(el)
  return (
    <div>
      <button onClick={handleOpen} className={styles.btn}>
        {text}
      </button>
    </div>
  )
}
