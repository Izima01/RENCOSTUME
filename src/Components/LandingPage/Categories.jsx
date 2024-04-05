import right from '../../assets/right.svg';
import gown3 from '../../assets/gown3.jpg';
import accessories from '../../assets/accessories.png';
import headGear from '../../assets/head-gear.png';
import footWear from '../../assets/foot-wear.png';
import styles from './Categories.module.css';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.categories}>
    <div className={styles.top}>
      <h2>Our <span>Categories</span></h2>
      <p>Explore our diverse selection of themed categories, offering everything from historical attire to fantastical creatures. Find the perfect costume for any event or occasion, all conveniently organized for easy browsing.</p>
      <button onClick={() => navigate('/gallery')}>See all Listing</button>
    </div>
    <div className={styles.images}>
      <article className={styles.one}>
        <img src={gown3} alt="" />
        <button onClick={() => navigate('/gallery')}>
          Clothing
          <img src={right} alt="" />
        </button>
      </article>
      <article className={styles.two}>
        <img src={accessories} alt="" />
        <button onClick={() => navigate('/gallery')}>
          Accessories
          <img src={right} alt="" />
        </button>
      </article>
      <article className={styles.three}>
        <img src={headGear} alt="" />
        <button onClick={() => navigate('/gallery')}>
          Hear Attires
          <img src={right} alt="" />
        </button>
      </article>
      <article className={styles.four}>
        <img src={footWear} alt="" />
        <button onClick={() => navigate('/gallery')}>
          Footwears
          <img src={right} alt="" />
        </button>
      </article>
    </div>
  </section>
  )
}

export default Categories