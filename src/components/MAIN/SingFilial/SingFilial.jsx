import React, { useEffect, useState } from 'react'
import styles from './SingFilial.module.scss'
import img from '../../../img/Filial.jpg'
//import data from '../Filials/data'
import { useParams } from 'react-router'
import { getAllBranches } from '../../../service/service'
export default function SingFilial() {
  const { id } = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    getAllBranches().then((res) => setData(res.data.filter((el) => el.id == id)))
    //getAllBranches().then((res) => setData(res.data))
  }, [])
  const currentData = data.length ? data[0] : []
  //console.log(currentData)
  return (
    <div className={styles.singFilial}>
      <div className={styles.singFilial__container}>
        <div className={styles.text}>
          <h2 className={styles.title}>{currentData.name}</h2>
        </div>
        <div className={styles.body}>
          <p>{currentData.description}</p>
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
              Адрес: <span>{currentData.address}</span>
            </p>
            <p>
              Часы работы:{' '}
              <span>{currentData.to_time + currentData.to_time}</span>
            </p>
            <p>
              Номер телефона: <span>{currentData.number}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
