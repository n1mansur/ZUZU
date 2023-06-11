import React, { useState } from 'react'
import styles from './Home.module.scss'
import Categories from '../../UI/Categories/Categories'
import Slider from '../Slider/Slider'
import datas from './datas'
import ProductCard from '../ProductCard/ProductCard'
import Mmodal from '../../MUI/Mmodal/Mmodal'
import { useQuery } from 'react-query'
import { getAllProducts } from '../../../service/service'
import Card from '../../UI/Card/Card'

export default function Home() {
  const [open, setOpen] = useState(false)
  const { data } = useQuery('getProducts', () => getAllProducts())

  const mappedData = (products = [], setOpen) => {
    return products.map((el, i) => {
      return <Card key={i} el={el} setOpen={setOpen} />
    })
  }

  return (
    <div className="container">
      <main className={styles.main}>
        <Slider />
        <Categories />
        <div className={styles.card__section} id="pizza">
          <h2 className={styles.section__title}>Pizza</h2>
          <ul className={styles.cards}>{mappedData(data, setOpen)}</ul>
        </div>
        {datas.map((products, i) => (
          <ProductCard products={products} key={i} setOpen={setOpen} />
        ))}
        <Mmodal open={open} setOpen={setOpen} />
      </main>
    </div>
  )
}
