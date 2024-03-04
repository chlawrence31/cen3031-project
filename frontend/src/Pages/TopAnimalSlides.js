import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

// Import Swiper Styles
import 'swiper/css/bundle';

export const TopAnimalSlides = ({ topAnimals }) => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >

            {topAnimals.map((slide) => (
                <SwiperSlide key={slide.image}>
                    <img src={slide.image} alt={slide.title}/>
                </SwiperSlide>
                
            ))}
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    )
}