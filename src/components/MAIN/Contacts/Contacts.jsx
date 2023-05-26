import React from 'react'
import styles from './Contacts.module.scss'

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__container}>
        <div className={styles.title}>
          <h2>Контакты</h2>
        </div>
        <div className={styles.paragraphs}>
          <p>
            Единный call-центр:{' '}
            <a href="+998 71 200 77 77">+998 71 200 77 77</a>
          </p>
          <div className={styles.hr}></div>
          <p>
            Вы можете написать нам{' '}
            <a href="@ZuzuPizzaSupport_bot">@ZuzuPizzaSupport_bot</a> также вы
            можете звонить по номеру{' '}
            <a style={{ color: '#000' }} href="+998712005400">
              +998712005400
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
