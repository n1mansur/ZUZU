import React from 'react'
import styles from './SingFilial.module.scss'
import img from '../../../img/Filial.jpg'
import data from '../Filials/data'
import { useParams } from 'react-router'

export default function SingFilial() {
  const { id } = useParams()
  const currentId = id - 1

  return (
    <div className={styles.singFilial}>
      <div className={styles.singFilial__container}>
        <div className={styles.text}>
          <h2 className={styles.title}>{data[currentId].filial}</h2>
        </div>
        <div className={styles.body}>
          <p>
            Название кафе «Zuzu» переводится с грузинского как «комната для
            приёмов». В интерьере заведения королевская пышность сочетается с
            уютом гостиной: на полу лежат домотканые орнаментальные ковры, зал
            украшает мебель из антикварного магазина, а серванты заполнены
            милыми безделушками.
          </p>
          <p>
            Еду здесь готовят по-домашнему, точно в тбилисском сахли. Посетители
            рекомендуют брать «бадриджаны бебия», то есть «баклажаны по
            бабушкиному рецепту» и мацони. Говорят, этот кисломолочный продукт
            здесь — один из лучших в городе.
          </p>
          <div className={styles.img__box}>
            <img src={img} alt="Filial" />
          </div>
          <div className={styles.info__section}>
            <p>
              Адрес: <span>{data[currentId].location}</span>
            </p>
            <p>
              Часы работы: <span>{data[currentId].hours}</span>
            </p>
            <p>
              Номер телефона: <span>{data[currentId].phone}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
