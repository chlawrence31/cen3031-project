import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow} from 'swiper/modules';
// Import Swiper Styles
import 'swiper/css/bundle';

export const TopAnimalSlides = ({ data }) => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        loop={true}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        effect={'coverflow'}
        coverflowEffect={{
            rotate: 30, 
            stretch: 0, 
            depth: 100, 
            modifier: 1, 
            slideShadows: true
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >   

            {data.map((slide) => (
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover' , 
                background: '#1A202C', color: 'white', fontFamily: 'Copperplate, serif'}} key={slide.Image} effect>
                    <img style= {{ width: 490, height: 500 }} src={slide.Image} alt={slide.title}/>
                    <h3>Name: {slide.Name}</h3>
                    <h3>Species: {slide.Species}</h3>
                    <h3>Sex: {slide.Sex}</h3>
                    <h3>Age: {slide.Age}</h3>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}