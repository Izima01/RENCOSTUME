/* eslint-disable react/prop-types */
import useStore from '../../../store';
import { TbCurrencyNaira } from 'react-icons/tb';
import './Cart.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { formatNumberToCurrency } from '../../Components/Checkout/ReviewOrder';
import delivery from '../../assets/delivery.svg';
import expressd from '../../assets/express.svg';
import returnd from '../../assets/return.svg';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
   const { cart, removeFromCart, addToCart, removeAllofOneProduct, totalCostFn } = useStore();
    const navigate = useNavigate();

  return (
      <div className='p-5'>
        <div className="mx-0 w-100 my-4">
            <div className='shadow row p-4 w-100'>
                <h4 className="shopping-cart-text ">Cart</h4>
                <div className='row pt-3 container border-bottom mb-3 px-0'>
                    <h5 className='col-3'>
                        Product
                    </h5>
                    <h5 className='col-1'>
                        Rent
                    </h5>
                    <h5 className='col-1'>
                        Buy
                    </h5>
                    <h5 className='col-2'>
                        Quantity
                    </h5>
                    <h5 className='col-1'>
                        Days
                    </h5>
                    <h5 className='col-2'>
                        Price/Day
                    </h5>
                    <h5 className='col-2'>
                        Subtotal
                    </h5>
                </div>
                <div className='d-flex flex-column gap-4 container px-0'>
                    {cart.map(item =>{
                        return (
                            <div className='row align-items-center product flex-nowrap w-100' key={item.id}>
                                <div className='col-3 px-0 position-relative'>
                                    <img src={item.image} alt="Product image" className='prod-img border-0 rounded' />
                                    <IoMdCloseCircleOutline size={24} className='cancel-icon' onClick={() => removeAllofOneProduct(item.name)} />
                                </div>
                                <div className='col-1 px-0'>
                                    <div className='custom-checkbox'>
                                        <input type="checkbox" disabled defaultChecked={item.type === "rent"} />
                                    </div>
                                </div>
                                <div className='col-1 px-0'>
                                    <div className='custom-checkbox'>
                                        <input type="checkbox" disabled defaultChecked={item.type === "buy"} />
                                    </div>
                                </div>
                                <div className='col-2 px-0'>
                                    <div className='qty'>
                                        <span onClick={() => addToCart({...item, quantity: 1})}>+</span>
                                        <p className='px-1'>{item.quantity}</p>
                                        <span onClick={() => removeFromCart(item.name)}>-</span>
                                    </div>
                                </div>
                                <div className='col-1 px-0 text-center'>{item.timeInDays} Days</div>
                                <div className='col-2 px-0 text-center'>
                                    <p className={'price'}>
                                        <TbCurrencyNaira size={18} />
                                        {formatNumberToCurrency(item?.price)}
                                    </p>
                                </div>
                                <div className='col-2 px-0 text-center'>
                                    <p className={'price'}>
                                        <TbCurrencyNaira size={18} />
                                        {formatNumberToCurrency(item?.price * item.quantity * item.timeInDays)}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                    
                <div className='container py-4'>
                    <div className='py-4'>
                        <h5>Choose Delivery Channel</h5>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 col-sm-8 mx-4 rounded shadow p-4 min-card'>
                            <div className='row'>
                                <div className='col-2' >
                                    <input type="radio" name='deliveryType'  />
                                </div>
                                <div className='col'>
                                    <h6>Delivery</h6>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-2' >
                                    <input type="radio" name='deliveryType'  />
                                </div>
                                <div className='col'>
                                    <h6>Express Delivery</h6>
                                </div>
                            </div>
                            <p>Express delivery is only available for payments made before 11am in Lagos and Abuja.</p>
                        </div>
                        <div className=' col-sm-8 col-md-6 mx-4 my-4 shadow rounded-2'>
                            {/* about to start the form for choosing delivery channel  */}
                            <div className='p-4'>
                                <h5>Choose Delivery Channel</h5>
                                <div className='py-2'>
                                    <input type="text" placeholder='Location' className='form-control' />
                                </div>
                                <p className='price'>
                                    Amount:
                                    <TbCurrencyNaira size={18} className='ms-3' />
                                    {formatNumberToCurrency(2000)}
                                </p>
                                <div className='py-2'>
                                    <input type="text" placeholder='Phone Number' className='form-control' />
                                </div>
                                <div className='row pt-4'>
                                    <div className='col-2 bg-purlight'>
                                        <img src={expressd} alt="" />
                                    </div>
                                    <div className='col-9 ms-2'>
                                        <h6>Delivery</h6>
                                        Delivery to your location cost 2,000 naira and the receiver must be readily available to receive item on stipulated date
                                    </div>
                                </div>
                                <div className='row pt-4'>
                                    <div className='col-2 bg-purlight'>
                                        <img src={returnd} alt="" />
                                    </div>
                                    <div className='col-9 ms-2'>
                                        <h6>Pick up</h6>
                                        Items must be picked up from our company on the designated as any issue arising from not doing so wont be our problem
                                    </div>

                                </div>
                                <div className='row pt-4'>
                                <div className='col-2 bg-purlight'>
                                        <img src={delivery} alt="" />
                                    </div>
                                    <div className='col-9 ms-2'>
                                        <h6>Returning items</h6>
                                        Items rented must be returned on stipulated date as failure will cost extra charges.
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='p-2 my-4'>
                            <h3 className='ps-2'><b>Cart Summary</b></h3>
                            <div className='container my-4 bg-purp py-4 px-5 rounded-2'>
                                    <div className='row border-bottom border-black px-0'>
                                        <p  className='col-9 mb-0'>Express Delivery</p>
                                        <p className='price col-3 mb-2 text-end my-0'>
                                            <TbCurrencyNaira size={18} className='ms-3' />
                                            {formatNumberToCurrency(2000)}
                                        </p>
                                    </div>
                                    <div className='row border-bottom border-black px-0 pt-3'>
                                        <p className='col-9 mb-2'>Item Total</p>
                                        {/* <p className='col-3 text-end'>#118,000</p> */}
                                        <p className='price col-3 mb-2 text-end my-0'>
                                            <TbCurrencyNaira size={18} className='ms-3' />
                                            {formatNumberToCurrency(totalCostFn())}
                                        </p>
                                    </div>
                                    <div className='row pt-3'>
                                        <div className='col-9'><b>Total</b></div>
                                        {/* <div className='col-1'>#120,000</div> */}
                                        <p className='price col-3 mb-2 text-end my-0 fw-bold'>
                                            <TbCurrencyNaira size={18} className='ms-3' />
                                            {formatNumberToCurrency(totalCostFn() + 2000)}
                                        </p>
                                    </div>
                                    <div>
                                        <small>Have a coupon? Enter the code</small>
                                        <div className='border'>
                                            <input type="text" className='form-control p-2 border-0' />
                                        </div>
                                    </div>
                                    <div className=' row pt-4'>
                                        <div className="col-9"><p><b>New Total</b></p></div>
                                        <p className='price col-3 mb-2 text-end my-0 fw-bold'>
                                            <TbCurrencyNaira size={18} className='ms-3' />
                                            {formatNumberToCurrency(totalCostFn() + 2000)}
                                        </p>
                                    </div>
                                    <div className='container  checkout-btn'>
                                        <button className='btn btn-purple' onClick={() => navigate("/checkout")}>Check out</button>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
    </div>
  )
}

export default Cart