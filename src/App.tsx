import { useRef, useState, useEffect, useCallback } from 'react';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Button from './components/button/Button';

import clientsReviews from './assets/clientsReviews';

import titles from './assets/texts/textsTitles';

import scss from './App.module.scss';

const MOBILE_RESOLUTION_POINT: number = 320; // 320px
const TABLET_RESOLUTION_POINT: number = 768; // 768px
const DESKTOP_RESOLUTION_POINT: number = 1440; // 1440px

function App() {
  const [dimensions, setDimensions] = useState({ 
      // height: window.innerHeight,
      width: window.innerWidth
  });
  const [numberSlide, setNumberSlide] = useState<number>(1);
  const [countSlides, setCountSlides] = useState<number>(1);
  const swiperRef = useRef<SwiperRef>(null);

  const handlerResize = useCallback(() => {
    if (dimensions.width >= MOBILE_RESOLUTION_POINT && dimensions.width < TABLET_RESOLUTION_POINT) setCountSlides(1)
    else if (dimensions.width >= TABLET_RESOLUTION_POINT && dimensions.width < DESKTOP_RESOLUTION_POINT) setCountSlides(2)
    else if (dimensions.width >= DESKTOP_RESOLUTION_POINT) setCountSlides(3);
    setDimensions({
      // height: window.innerHeight,
      width: window.innerWidth
    });
  }, [dimensions.width]);

  useEffect(() => {
    window.addEventListener('resize', handlerResize);

    return () => {
        window.removeEventListener('resize', handlerResize);
    }
  }, [handlerResize]);

  useEffect(() => {
    if (dimensions.width >= MOBILE_RESOLUTION_POINT && dimensions.width < TABLET_RESOLUTION_POINT) setCountSlides(1)
    else if (dimensions.width >= TABLET_RESOLUTION_POINT && dimensions.width < DESKTOP_RESOLUTION_POINT) setCountSlides(2)
    else if (dimensions.width >= DESKTOP_RESOLUTION_POINT) setCountSlides(3)
  }, [dimensions.width]);
  
  return (
    <div className={scss.App}>
      <div className='container'>
        <div className={scss.wrraper}>

          <h1 className={scss.title}>{titles.textTitleHeader}</h1>
          
          <div className={scss.swiper}>

            <Button
              text='&lt;'
              disabled={numberSlide === 1 || numberSlide === countSlides ? true : false}
              onClick={() => {
                setNumberSlide(() => numberSlide - countSlides);
                swiperRef?.current?.swiper.slidePrev();
              }}
            />
              
            <Swiper
              ref={swiperRef}
              // onSlideChange={(swiper: any) => setNumberSlide(() => swiper.activeIndex + 3)}
              onSlideChange={(swiper: any) => setNumberSlide(() => swiper.activeIndex + countSlides)}
              className={scss.slider}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              // slidesPerView={3}
              slidesPerView={countSlides}
              spaceBetween={18}
              // slidesPerGroup={3}
              slidesPerGroup={countSlides}
              navigation
              pagination={{
                clickable: true,
                clickableClass: [scss.paginationPosition, 'swiper-pagination-clickable'].join(" "),
                bulletClass: [scss.swiperBulletClass, 'swiper-pagination-bullet'].join(" "),
                bulletActiveClass: [scss.swiperBulletActiveClass, 'swiper-pagination-bullet-active'].join(" "),
              }}
              wrapperTag='ul'
            >
              {clientsReviews.map((item) => 
                <SwiperSlide className={scss.slide} key={item.id} tag='li'>
                  <div className={scss.image}>
                    <img className={scss.clientLogo} src={item.clientLogo} alt={item.clientName} width="270" />
                  </div>
                  <p className={scss.text}>{item.text}
                    <span className={scss.span}>“</span>
                  </p>
                  <div className={scss.persone}>
                    <img className={scss.photo} src={item.photo} alt={item.name} width="60" />
                    <div className={scss.info}>
                      <p className={scss.name}>{item.name}</p>
                      <p className={scss.position}>{item.position}, {item.clientName}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>

            <Button
              text='&gt;'
              disabled={numberSlide === clientsReviews.length ? true : false}
              onClick={() => {
                setNumberSlide(() => numberSlide + countSlides);
                swiperRef?.current?.swiper.slideNext();
              }}
            />

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
