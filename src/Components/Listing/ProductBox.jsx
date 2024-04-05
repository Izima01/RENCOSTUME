/* eslint-disable react/prop-types */
import styles from './Products.module.css';
import { TbCurrencyNaira } from 'react-icons/tb';
import { formatNumberToCurrency } from '../Checkout/ReviewOrder';
import useStore from '../../../store';
import cartImg from '../../assets/cart.svg';
import check from '../../assets/check.svg';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ProductBox = ({ product, handleClick }) => {
    const { image, name, price } = product;
    const { cart, addToLiked, removeFromLiked, liked } = useStore();

    const isProductInCart = () => {
        const isTrue = cart.map(el => el.name).includes(name);
        return isTrue;
    }

    return (
        <article className={styles.product} onClick={(e) => handleClick(e, product)}>
            <img src={image} alt="" />
            {
                liked.includes(name) ?
                <FaHeart className={styles.likeBtn} fill='white' size={26} onClick={() => removeFromLiked(name)} />
                : <FaRegHeart className={styles.likeBtn} color='white' size={26} onClick={() => addToLiked(name)} />
            }
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>
                <TbCurrencyNaira size={18} />
                {formatNumberToCurrency(price)}
            </p>
            <button
                className={styles.cartButton}
                disabled={isProductInCart()}
                style={{ background: isProductInCart() ? '#3d1551' : 'transparent', color: isProductInCart() ? 'white' : '#3d1551' }}
            >
                {
                    isProductInCart() ? <>
                        Added
                        <img src={check} alt="" />
                    </> : <>
                        Add to Cart
                        <img src={cartImg} alt="" />
                    </>
                }
            </button>

        </article>
    )
}

export default ProductBox