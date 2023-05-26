import React from 'react'
import styles from './Footer.module.scss'
import logo from '../../../img/Logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  const activeFn = ({ isActive }) => (isActive ? `${styles.active}` : '')

  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.footer__section}>
          <Link className={styles.logo} to="/">
            <img src={logo} alt="LOGO" />
          </Link>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <NavLink className={activeFn} to="/filials">
                Филиалы
              </NavLink>
            </li>
            <li className={styles.footer__item}>
              <NavLink className={activeFn} to="/about">
                О нас
              </NavLink>
            </li>
            <li className={styles.footer__item}>
              <NavLink className={activeFn} to="/contacts">
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.footer__lisnk}>
          <a href="">©Zuzu 2005 - 2021 All rights reserved</a>
          <div className={styles.footer__socials}>
            {/*<Link to="/"></Link>
            <a to="/"></a>
            <a to="/"></a>*/}
          </div>
        </div>
      </div>
    </div>
  )
}
