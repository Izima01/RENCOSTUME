import { useSwiper } from 'swiper/react'; 
import styles from './Testimonial.module.css';
import next from '../../assets/next.svg'


export const SlidePrevButton = () => {
    const swiper = useSwiper();

    return (
        <div className={styles.title}>
            <button onClick={() => swiper.slidePrev()}>
                <img src={next} alt="" />
            </button>
            <h4>Testimonial</h4>
        </div>
    )
}

export const SlideNextButton = () => {
    const swiper = useSwiper();

    return (
        <button className={styles.next} onClick={() => swiper.slideNext()}><img src={next} alt="" /></button>
    )
}
