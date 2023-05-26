import React from 'react'
import styles from './Slider.module.scss'

import img from '../../../img/slider 1.jpg'
import Slide from '../../UI/Slide/Slide'

export default function Slider() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Slide img={img} />
      </div>
    </div>
  )
}
