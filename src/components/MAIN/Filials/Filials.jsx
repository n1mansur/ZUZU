import React from 'react'
import styles from './Filials.module.scss'
import Filial from '../../UI/Filial/Filial'
import data from './data'
import Button from '../../UI/Button/Button'
import { Link } from 'react-router-dom'

export default function Filials() {
  const filialsMap = (arr) => {
    return arr.map((el, i) => {
      return (
        <Link to={`/filials/${el.id}`} key={i}>
          <Filial value={el} key={i} />
        </Link>
      )
    })
  }
  return (
    <div className={styles.filials__section}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.section__title}>Филиалы</h2>
          <div className={styles.btns}>
            <Button
              text={'Список'}
              style={{
                width: '147px',
                height: '48px',
              }}
            />
            <Button text={'Карта'} style={{ width: '147px', height: '48px' }} />
          </div>
        </div>
        <ul className={styles.cards}>{filialsMap(data)}</ul>
      </div>
    </div>
  )
}
