import React from 'react'
import styles from './ProductCard.module.scss'
import Card from '../../UI/Card/Card'

const mappedPizzas = (product, setOpen) => {
  return product.map((el, i) => {
    return <Card key={i} el={el} setOpen={setOpen} />
  })
}

export default function ProductCard({ products, setOpen }) {
  return (
    <div className={styles.card__section} id={products.category.Eng}>
      <div className={styles.container}>
        <h2 className={styles.section__title}>{products.category[`Ru`]}</h2>
        <ul className={styles.cards}>{mappedPizzas(products.data, setOpen)}</ul>
      </div>
    </div>
  )
}
