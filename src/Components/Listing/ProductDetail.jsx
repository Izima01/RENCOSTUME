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
import ethiopia from '../../assets/image-carousel-parent@2x.png';
import { ToastContainer, toast } from 'react-toastify';
import cartImg from '../../assets/cart.svg';
import check from '../../assets/check.svg';
import { CiHeart } from "react-icons/ci";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/display-name
const ExampleCustomInput = forwardRef(({value, onClick, isDelivery}, ref) => (
  <button className={styles.dateBtn} onClick={onClick} ref={ref}>
    {
      value === new Date()
      ? `Choose ${isDelivery ? "delivery" : "returning" } date`
      : new Date(value).toDateString()
    }
    <RiArrowDropDownLine size={24} />
  </button>
));

const ProductDetail = ({ showDetails, setShowDetails, selectedProduct }) => {
  const detailRef = useRef(null);
  const [count, setCount] = useState(1);
  const today = new Date();
  const tomorrow = new Date(today);
  // tomorrow.setDate(today.getDate() + 1);

  const [deliveryDate, setDeliveryDate] = useState(tomorrow.setDate(today.getDate() + 1));
  const [returnDate, setReturnDate] = useState(tomorrow.setDate(today.getDate() + 3));
  const { addToCart, cart, removeAll } = useStore();

  const isProductInCart = () => {
    const isTrue = cart.map(el => el.name).includes(name || "Ethiopian Crown");
    return isTrue;
  }

  const addProductToCart = () => {
    if (returnDate < deliveryDate) return toast.error("Set a valid Return Date");

    setTimeout(() => {
      addToCart({
          name: selectedProduct?.name,
          price: selectedProduct?.price,
          image: selectedProduct?.image || ethiopia,
          quantity: count
      });
      toast.success("Item added to Cart");

      setDeliveryDate(tomorrow.setDate(today.getDate() + 1));
      setReturnDate(tomorrow.setDate(today.getDate() + 3));
    }, 1000);
};

  useEffect(() => {
    if (showDetails) return detailRef?.current?.showModal();
    detailRef?.current?.close();
  });

  return (
    <dialog ref={detailRef} className={styles.detailsWrapper}>
      <ToastContainer position='top-left' />
      <div className={styles.details}>
        <IoClose size={28} className={styles.close} onClick={() => setShowDetails(false)} />
        <div>
          <button onClick={() => removeAll()}>Clear Cart</button>
            <img src={selectedProduct?.image} className={styles.image} alt="" />
            <h2>Description</h2>
            <p>{selectedProduct?.description || "The Nefertiti woven crown, inspired by ancient Egyptian regality, exudes opulence and grace. Crafted with intricate golden threads."}</p>
        </div>
        <div>
            <h4>{selectedProduct?.name}</h4>
            <p>
                <img src={stars} alt="" />
                (35)
            </p>
            <p className={styles.price}>
                <TbCurrencyNaira size={18} />
                {selectedProduct.price && formatNumberToCurrency(selectedProduct?.price)}
            </p>
            <em>Quantity</em>
            <div className={styles.counts}>
              <p>{count}</p>
              <button onClick={() => setCount(count => count < selectedProduct.quantity ? count + 1 : selectedProduct.quantity)}>+</button>
              <button onClick={() => setCount(count => count == 1 ? count : count-1)}>-</button>
              <h5>{selectedProduct?.quantity} units available</h5>
            </div>
            <em>Sizes</em>
            <div className={styles.sizes}>
              <button>x</button>
              <button>xl</button>
              <button>xxl</button>
            </div>

            <div className={styles.dates}>
              <DatePicker
              // minDate={}
                allowSameDay={false}
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
            <div className={styles.last}>
              <button>
                Buy Now
              </button>
              <button>
                Save for later
                <CiHeart size={28} />
              </button>
            </div>
        </div>
      </div>
    </dialog>
  )
}

export default ProductDetail