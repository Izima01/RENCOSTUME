import styles from './Success.module.css';
import logo from '../../assets/Logo-small.svg';
import { FaCheckCircle } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
        <section>
            <img src={logo} width={110} height={110} alt=""  />
            <FaCheckCircle fill='#3d1551' size={50} />
            <h4>ORDER SUCCESSFULLY COMPLETED!</h4>
            <div className={styles.bottom}>
                <BsInfoCircle size={24} />
                <p>
                    A notification will be sent when your order has been picked and you can also track your order from the navigation bar.
                </p>

            </div>
            <button onClick={() => navigate('/')}>Back to Home Page</button>
        </section>
    </div>
  )
}

export default Success