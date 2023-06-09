import React, { useEffect } from 'react'
import styles from './Filials.module.scss'
import Filial from '../../UI/Filial/Filial'
//import data from './data'
import Button from '../../UI/Button/Button'
import { Link } from 'react-router-dom'
import { getAllBranches } from '../../../service/service'
import { useState } from 'react'

export default function Filials() {
  const [data, setData] = useState([])
  useEffect(() => {
    getAllBranches().then((res) => setData(res.data))
  }, [])
  const filialsMap = (arr) => {
    return arr.map((el) => {
      return (
        <Link to={`/filials/${el.id}`} key={el.id}>
          <Filial value={el} />
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
