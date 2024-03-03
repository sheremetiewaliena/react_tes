
import './App.css'

import ProductCard from './components/ProductCard'
import MailBox from './components/MailBox'
const productData = [{
  id: "1_product",
  
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0oGtbIltkWhp0ArvRHRoxopWVbqx_KsGaw&usqp=CAU",
      title: "Tako Black",
      price: 4.00,
      hasDiscount: true,
    description: "традиционное блюдо мексиканской кухни. Тако состоит из кукурузной или пшеничной тортильи c разнообразной начинкой — говядиной, свининой, курятиной, морепродуктами, чоризо, бобами, овощами, тушёной мякотью мексиканского кактуса."
},
  {
    id: "2_product",
  
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvLbRzUKw9nin50QCtrEY1c7vK8INX7-noQ&usqp=CAU",
    title: "Tako Red",
    price: 4.50,
     hasDiscount: false,
    description: "традиционное блюдо мексиканской кухни. Тако состоит из кукурузной или пшеничной тортильи c разнообразной начинкой — говядиной, свининой, курятиной, морепродуктами, чоризо, бобами, овощами, тушёной мякотью мексиканского кактуса."
  },
{ id: "3_product",
  
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpeSjYZPRCSwEzlaS4ZuMaOlrr3s5f8y1BA&usqp=CAU",
      title: "Tako Blue",
      price: 4.99,
      hasDiscount: false,
    description: "традиционное блюдо мексиканской кухни. Тако состоит из кукурузной или пшеничной тортильи c разнообразной начинкой — говядиной, свининой, курятиной, морепродуктами, чоризо, бобами, овощами, тушёной мякотью мексиканского кактуса."
  },
]

function App() {
 
  return <div>
    <MailBox />
    {productData.map(item => {
      return (
        <ProductCard 
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          hasDiscount={item.hasDiscount}
          description={item.description } />
      )
    })}

    
  </div>
}

export default App;
