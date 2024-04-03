/* eslint-disable react/prop-types */
import styles from './Products.module.css';
import ethiopia from '../../assets/image-carousel-parent@2x.png';
import { TbCurrencyNaira } from 'react-icons/tb';
import { formatNumberToCurrency } from '../Checkout/ReviewOrder';
import useStore from '../../../store';
import cartImg from '../../assets/cart.svg';
import check from '../../assets/check.svg';

const ProductBox = ({ product, handleClick }) => {
    const { image, name, price } = product;
    const { cart } = useStore();

    const isProductInCart = () => {
        const isTrue = cart.map(el => el.name).includes(name || "Ethiopian Crown");
        return isTrue;
    }

    return (
        <article className={styles.product} onClick={(e) => handleClick(e, { name: "Ethiopian Crown", image: ethiopia, price: 15000, quantity: 5 })}>
            <img src={image || ethiopia} alt="" />
            <p className={styles.name}>{name || "Ethiopian Crown"}</p>
            <p className={styles.price}>
                <TbCurrencyNaira size={18} />
                {formatNumberToCurrency(price || 15000)}
            </p>
            <button
                className={styles.cartButton}
                // onClick={addOneToCart}
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