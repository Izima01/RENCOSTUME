import styles from './Header.module.css';
import logo from '../../assets/Logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import MobileNav from './MobileNav';
import { useEffect, useRef, useState } from 'react';
import useStore from '../../../store';
import '../../index.css';

const Header = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const { count, cart, user } = useStore();

  useEffect(() => {
    if (showMenu) return menuRef?.current?.showModal();
    menuRef?.current?.close();
  }, [showMenu]);

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <header className={styles.mainn}>
      <div>
        <HiMenu className={styles.ham} size={20} onClick={() => setShowMenu(true)} />
        <a href="/" className={styles.logo}>
          <img src={logo} alt="" />
        </a>
      </div>
      <Link to='/gallery' className={styles.rent}>Rent</Link>
      <div className={styles.searchBox}>
        <input type="search" placeholder='What are you looking for?' />
        <CiSearch size={24} stroke='#060208' className={styles.searchIcon} />
      </div>
      <nav>
        <Link to="/">Order Tracking</Link>
        <Link to='/checkout' className='login-link'>{user ? "Checkout" : "Sign In"}</Link>
        <Link>
          <CiHeart size={24} stroke='#060208' />
        </Link>
        <Link to="/shopping-cart" className={styles.cart}>
          <IoCartOutline size={24} stroke='#060208' />
          {
            cart.length !== 0 ? <p>{count()}</p> : <></>
          }
        </Link>
      </nav>
      <div className={styles.mobNav}>
        <Link>
          <CiHeart size={24} stroke='#060208' />
        </Link>
        <Link to="/shopping-cart" className={styles.cart}>
          <IoCartOutline size={24} stroke='#060208' />
          {
            cart.length !== 0 ? <p>{count()}</p> : <></>
          }
        </Link>
      </div>
        <dialog ref={menuRef} style={{ border:'none' }}>
          <MobileNav setShowMenu={setShowMenu} />
        </dialog>
    </header>
  )
}

export default Header