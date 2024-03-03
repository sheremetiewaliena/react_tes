import MailBox from './components/MailBox'
import ProductGallery from "./components/ProductGallery/ProductGallery"
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
   <ProductGallery productData={productData} />

  
  </div>
}

export default App;
