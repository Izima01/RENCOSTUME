import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import styles from './Header.module.css';
import useStore from '../../../store';

// eslint-disable-next-line react/prop-types
const MobileNav = ({ setShowMenu }) => {
  const { user } = useStore();

  return (
    <aside className={styles.mobileNav}>
      <button onClick={() => setShowMenu(false)} className={styles.close}>
        <IoClose size={28} color='#3d1551' />
      </button>
      <div className={styles.searchBoxSmall}>
        <input type="search" placeholder='What are you looking for?' />
        <CiSearch size={24} stroke='#060208' className={styles.searchIcon} />
      </div>
      <Link to='/gallery' className='rent'>Rent</Link>
      <Link to="/">Order Tracking</Link>
        <Link to='/checkout' className='login-link'>{user ? "Checkout" : "Sign In"}</Link>
    </aside>
  )
}

export default MobileNav