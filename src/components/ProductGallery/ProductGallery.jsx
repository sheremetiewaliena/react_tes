import css from '../../App.module.css'
import ProductCard from '../ProductCard/ProductCard';

const ProductGallery = ({productData}) => {
  return (
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
  )
}

export default ProductGallery