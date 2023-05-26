import React from 'react'
import styles from './Header.module.scss'
import logo from '../../../img/Logo.png'
import Button from '../../UI/Button/Button'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import { Link } from 'react-router-dom'
import MenuNavbar from '../../MUI/Drawer/MenuNavbar'
import Language from '../../MUI/Language/Language'

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header__left}>
            <MenuNavbar />
            <div className={styles.logo} id="headerLogo">
              <Link to="/">
                <img src={logo} alt="LOGO" />
              </Link>
            </div>
            <div className={styles.location} id="headerLocation">
              <Button ico={<LocationOnIcon />} text={'Tashkent'} />
            </div>
          </div>
          <div className={styles.header__right}>
            <Link to="/basket" className={styles.basket}>
              <Button
                ico={<ShoppingCartIcon />}
                text={'Корзина'}
                className={styles.lang}
              />
            </Link>
            <Language />
            <Button
              ico={<PermIdentityIcon />}
              text={'Войти'}
              className={styles.join}
            />
            <button className={styles.user}>{<PermIdentityIcon />}</button>
          </div>
        </header>
      </div>
    </div>
  )
}
