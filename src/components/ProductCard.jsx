

const ProductCard = ({ img, title, price, discription,hasDiscount = false }) =>{
  return (
    <div>
      
      <img
        width={250}
        src={img}
        alt="" />
      <h3>{title} {hasDiscount ? <span>🎁 Big Sale</span> : null}</h3>
      <h4>Price: {price}UAH</h4>
          <p>{discription}
      </p>
      
          <button type="button">Add to Cart</button>
          <button type="button">😊❤😍</button>
          

    </div>
  ) 
}

export default ProductCard