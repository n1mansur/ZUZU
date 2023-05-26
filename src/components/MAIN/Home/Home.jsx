import React, { useState } from 'react'
import styles from './Home.module.scss'
import Categories from '../../UI/Categories/Categories'
import Slider from '../Slider/Slider'
import datas from './datas'
import ProductCard from '../ProductCard/ProductCard'
import Mmodal from '../../MUI/Mmodal/Mmodal'

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className="container">
      <main className={styles.main}>
        <Slider />
        <Categories />
        {datas.map((products, i) => (
          <ProductCard products={products} key={i} setOpen={setOpen} />
        ))}
        <Mmodal open={open} setOpen={setOpen} />
      </main>
    </div>
  )
}
