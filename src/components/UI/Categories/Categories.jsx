import React from 'react'
import styles from './Categories.module.scss'
import data from './data'
import { Link } from 'react-scroll'

export default function Categories() {
  return (
    <>
      <div className={styles.categories__box}>
        <ul className={styles.list}>
          {data.map((el) => (
            <li className={styles.item} key={el.id}>
              <Link to={el.id} spy={true} offset={-10} duration={200}>
                {el.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
