import React from 'react'
import Header from '../MAIN/Header/Header'
import Footer from '../MAIN/Footer/Footer'
import styles from './Layout.module.scss'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
