
import pastaImg from '../../../img/pasta.png'
import saladImg from '../../../img/salad.png'

const datas = [
  {
    category: { Eng: 'Pasta', Ru: 'Паста', Uz: 'Pasta' },
    data: [
      {
        name: 'паста',
        comment:
          'Томатный соус, говядина, маслины булочка гамбургер, соленые...',
        price: 74000,
        id: 'pasta1',
        img: pastaImg,
        status: true,
      },
      {
        name: 'паста',
        comment:
          'Томатный соус, говядина, маслины булочка гамбургер, соленые...',
        price: 74000,
        id: 'pasta2',
        img: pastaImg,
        status: false,
      },
    ],
  },
  {
    category: { Eng: 'Salad', Ru: 'Салат', Uz: 'Salat' },
    data: [
      {
        name: 'салат',
        comment:
          'Томатный соус, говядина, маслины булочка гамбургер, соленые...',
        price: 74000,
        id: 'salad1',
        img: saladImg,
        status: true,
      },
      {
        name: 'салат',
        comment:
          'Томатный соус, говядина, маслины булочка гамбургер, соленые...',
        price: 74000,
        id: 'salad2',
        img: saladImg,
        status: false,
      },
    ],
  },
]

export default datas
