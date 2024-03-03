
import css from "./App.module.css"

import ProductCard from './components/ProductCard/ProductCard'
import MailBox from './components/MailBox'
const productData = [{
  id: "1_product",
  
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0oGtbIltkWhp0ArvRHRoxopWVbqx_KsGaw&usqp=CAU",
      title: "Tako Black",
  price: 4.00,
      quantity: 4,
      hasDiscount: true,
    description:
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?",
},
  {
    id: "2_product",
  
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvLbRzUKw9nin50QCtrEY1c7vK8INX7-noQ&usqp=CAU",
    title: "Tako Red",
    price: 4.50,
    quantity: 7,
     hasDiscount: false,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?"
  ,},
{ id: "3_product",
  
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpeSjYZPRCSwEzlaS4ZuMaOlrr3s5f8y1BA&usqp=CAU",
      title: "Tako Blue",
  price: 4.99,
      quantity: 2,
      hasDiscount: false,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, reprehenderit?"
  ,},
]

function App() {
 
  return <div>
    <MailBox />
    <div className={css.cardGrid}>
      {[...productData]
        .sort((a, b) => {
        const isPromotinalA = a.quantity <= 2;
        const isPromotinalB = b.quantity <= 2;
      return isPromotinalB - isPromotinalA;
      })
        .map(item => {

      const isPromotinal = item.quantity <=2
      return (
        <ProductCard 
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          hasDiscount={item.hasDiscount}
          quantity={item.quantity}
          description={item.description}
          promotinal={isPromotinal} />
      )
    })}

    
    </div>

  
  </div>
}

export default App;
