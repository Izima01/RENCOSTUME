import styles from './Testimonial.module.css';
// import next from '../../assets/next.svg'
// import test from '../../assets/testimonial.png';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SlidePrevButton, SlideNextButton } from './SlideButton';

const testimonials = [
  {
    name: 'Emmanuel',
    role: 'Film Producer',
    review: "When our costume designer bailed last minute, RenCostume was our lifesaver! We needed period-specific outfits for a crucial scene, and RenCostume delivered. Their quick response and diverse selection saved the day, ensuring our production stayed on track. Thank you, RenCostume, for being our go-to in a pinch"
  },
  {
    name: 'James',
    role: 'Actor',
    review: "I was freaking out when my original costume tore right before filming, but RenCostume came through in the clutch! Their easy-to-use website helped me find a replacement costume in record time. The quality was top-notch, and I felt confident stepping back on set. RenCostume, you're my hero!"
  },
  {
    name: 'Adebisi',
    role: 'Actress',
    review: "As an actress, wardrobe malfunctions can be a nightmare, but RenCostume was my guardian angel! When my costume didn't fit as expected, they rushed a replacement to me just in time for filming. Their professionalism and attention to detail saved me from a major meltdown. Thanks, RenCostume, for being there when I needed you most!"
  },
  {
    name: 'Angel',
    role: 'Skit-maker',
    review: "RenCostume exceeded my expectations! The costume selection was vast and impressive, and the quality was outstanding. The online booking process was smooth and convenient, and the customer service was exceptional. I received numerous compliments at my event and felt confident and comfortable in my chosen attire. I highly recommend RenCostume for anyone in search of top-notch costume rentals"
  },
];

const Testimonial = () => {

  return (
    <section className={styles.wrapper}>
        <Swiper
          autoplay
          slidesPerView={1}
          modules={[ Navigation ]}
          spaceBetween={50}
          // navigation
          loop
          // prev
          pagination={{ clickable: true }}
        >
          {
            testimonials.map(test => (
              <SwiperSlide key={test.name} style={{ display: 'flex', alignItems: 'flex-end' }}>
                <SlidePrevButton />
                <div className={styles.mid}>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <h3>{test.name}</h3>
                      <p>- {test.role}</p>
                    </div>
                      <div>
                          <FaQuoteLeft className={styles.quoteL} size={36} />
                          <FaQuoteRight className={styles.quoteR} size={36} />
                          <p>{test.review}</p>
                      </div>
                    {/* <div className='d-flex'>
                      <SlidePrevButton />
                      <SlideNextButton />
                    </div> */}
                  </div>
                </div>
                <SlideNextButton />
              </SwiperSlide>
            ))
          }

        </Swiper>
    </section>
  )
}

export default Testimonial