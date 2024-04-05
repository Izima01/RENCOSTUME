import styles from './Home.module.css';
import Hero from '../../Components/LandingPage/Hero';
import Why from '../../Components/LandingPage/Why';
import Categories from '../../Components/LandingPage/Categories';
import Gallery from '../../Components/LandingPage/Gallery';
import AboutUs from '../../Components/LandingPage/AboutUs';
import Testimonial from '../../Components/LandingPage/Testimonial';
import Card from '../../Components/LandingPage/Card';
import google from '../../assets/google.svg';
import shopify from '../../assets/shopify.svg';
import afa from '../../assets/afa.jpg';
import hdfa from '../../assets/hdfa.png';

const Home = () => {
  return (
    <section className={styles.homeWrapper}>
      <Hero />

      <Why />

      <Categories />

      <Gallery />

      <AboutUs />
      {/* <ScrollUp /> */}

      <section className={styles.trusted}>
        <h3>Trusted By</h3>
        <div>
          <img src={google} alt="" />
          <img src={afa} alt="" />
          <img src={shopify} alt="" />
          <img src={hdfa} alt="" />
        </div>
      </section>

      <Testimonial />

      <Card />

    </section>
  )
}

export default Home