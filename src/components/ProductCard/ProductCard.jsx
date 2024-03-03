import cn from 'classnames'
import { FaCartPlus } from "react-icons/fa6";
import css from "./ProductCard.module.css";

const ProductCard = ({
  img,
  title,
  price,
  description,
  quantity,
  hasDiscount = false,
  promotinal = false,
}) => {

  return (
    <div className={cn(css.card, {
      [css.cardPromotional]: promotinal,
    }
    )}>
      
      <img className={css.cardImg}
        width={250}
        src={img}
        alt="" />
      <h3 className={css.cardTitle}>{title} {hasDiscount ? <span>🎁 Big Sale</span> : null}</h3>
     <p className={css.cardDescription}>Items left: {quantity} </p>
      <h4 className={css.cardPrice}>Price: {price} UAH</h4>
      <p className={css.cardDescription}>{description}
      </p>
      <div className={css.cardBtnWrapper}>
        <button className={css.cardAddToCardBtn} type="button"><FaCartPlus/>  Add to Cart</button>
        <button className={css.cardSmileBtn} type="button">😊❤😍</button>
          </div>

    </div>
  ) 
}

export default ProductCard