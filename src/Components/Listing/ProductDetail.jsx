/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useRef, useState } from 'react';
import styles from './ProductDetail.module.css';
import { IoClose } from "react-icons/io5";
import stars from '../../assets/stars.svg';
import { TbCurrencyNaira } from 'react-icons/tb';
import { formatNumberToCurrency } from '../Checkout/ReviewOrder';
import { RiArrowDropDownLine } from "react-icons/ri";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useStore from '../../../store';
import { ToastContainer, toast } from 'react-toastify';
import cartImg from '../../assets/cart.svg';
import check from '../../assets/check.svg';
import "react-toastify/dist/ReactToastify.css";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const today = new Date();
const tomorrow = new Date(today);

function differenceInDays(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffInMilliseconds = Math.abs(date1 - date2);
  return Math.round(diffInMilliseconds / oneDay);
}

function isSameDayAndMonth(date1, date2) {
  return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth();
}

// eslint-disable-next-line react/display-name
const ExampleCustomInput = forwardRef(({value, onClick, isDelivery}, ref) => (
  <button className={styles.dateBtn} onClick={onClick} ref={ref}>
    {
      isSameDayAndMonth(new Date(value), new Date(tomorrow.setDate(today.getDate() + (isDelivery ? 1 : 3))))
      ? `Choose ${isDelivery ? "delivery" : "returning" } date`
      : new Date(value).toDateString()
    }
    <RiArrowDropDownLine size={24} />
  </button>
));

const ProductDetail = ({ showDetails, setShowDetails, selectedProduct }) => {
  const detailRef = useRef(null);
  const [count, setCount] = useState(1);

  const [deliveryDate, setDeliveryDate] = useState(tomorrow.setDate(today.getDate() + 1));
  const [returnDate, setReturnDate] = useState(tomorrow.setDate(today.getDate() + 3));
  const { addToCart, cart, addToLiked, removeFromLiked, liked } = useStore();

  const isProductInCart = () => {
    const isTrue = cart.map(el => el.name).includes(selectedProduct.name);
    return isTrue;
  }

  const addProductToCart = () => {
    if (isSameDayAndMonth(new Date(deliveryDate), new Date(tomorrow.setDate(today.getDate() + 1)))) return toast.error("Select a delivery date");
    if (isSameDayAndMonth(new Date(returnDate), new Date(tomorrow.setDate(today.getDate() + 3)))) return toast.error("Select a return date");


    setTimeout(() => {
      addToCart( {...selectedProduct, quantity: count, timeInDays: differenceInDays(deliveryDate, returnDate), deliveryDate, returnDate });
      toast.success("Item added to Cart");

      setDeliveryDate(tomorrow.setDate(today.getDate() + 1));
      setReturnDate(tomorrow.setDate(today.getDate() + 3));
    }, 1000);
  };

  useEffect(() => {
    if (showDetails) return detailRef?.current?.showModal();
    detailRef?.current?.close();
  }, [showDetails]);

  return (
    <dialog ref={detailRef} className={styles.detailsWrapper}>
      <ToastContainer position='top-left' />
      <div className={styles.details}>
        <IoClose size={28} className={styles.close} onClick={() => setShowDetails(false)} />
        <div>
            <img src={selectedProduct?.image} className={styles.image} alt="" />
            <h2>Description</h2>
            <p>{selectedProduct?.name}</p>
        </div>
        <div style={{ paddingBlock: '16px' }}>
            <h4>{selectedProduct?.name}</h4>
            <div>
                <img src={stars} alt="" className='pe-2' />
                (35)
            </div>
            <p className={styles.price}>
                <TbCurrencyNaira size={18} />
                {selectedProduct.price && formatNumberToCurrency(selectedProduct?.price)}
            </p>
            <em>Quantity</em>
            <div className={styles.counts}>
              <p>{count}</p>
              <button onClick={() => setCount(count => count < selectedProduct.stock ? count + 1 : selectedProduct.stock)}>+</button>
              <button onClick={() => setCount(count => count == 1 ? count : count-1)}>-</button>
              <h5>{selectedProduct?.stock} units available</h5>
            </div>
            <em>Sizes</em>
            <div className={styles.sizes}>
              <button>x</button>
              <button>xl</button>
              <button>xxl</button>
            </div>

            <div className={styles.dates}>
              <DatePicker
                minDate={tomorrow.setDate(today.getDate() + 1)}
                // allowSameDay={false}
                selected={deliveryDate}
                onChange={(date) => setDeliveryDate(date)}
                customInput={<ExampleCustomInput isDelivery={true} value={deliveryDate} />}
              />

              <DatePicker
                minDate={deliveryDate}
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                customInput={<ExampleCustomInput isDelivery={false} value={returnDate} />}
              />
            </div>

            <button
              className={styles.cartButton}
              onClick={addProductToCart}
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
            {/* <div className={styles.last}> */}
              <button className={styles.save}>
                Save for later
                {
                    liked.includes(selectedProduct.name) ?
                    <FaHeart className={styles.likeBtn} fill='white' size={26} onClick={() => removeFromLiked(selectedProduct.name)} />
                    : <FaRegHeart className={styles.likeBtn} color='white' size={26} onClick={() => addToLiked(selectedProduct.name)} />
                }
              </button>
            {/* </div> */}
        </div>
      </div>
    </dialog>
  )
}

export default ProductDetail